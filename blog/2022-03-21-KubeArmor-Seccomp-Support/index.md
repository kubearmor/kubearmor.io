---
slug: KubeArmor-Seccomp-Support
title: KubeArmor Seccomp Support
authors: nyrahul
tags: [design]
---

## High Level Design

## Policy Mapping

KubeArmorPolicy for seccomp

```yaml
apiVersion: security.kubearmor.com/v1
kind: KubeArmorSeccompPolicy
metadata:
  name: ksp-wordpress-block-process
  namespace: wordpress-mysql
spec:
  severity: 3
  selector:
    matchLabels:
      app: wordpress
  seccomp:
    arch: [x86_64, x86, x32]    #OPTIONAL
    syscalls: [accept4, epoll_wait, pselect6, futex, madvise]
    action: Allow
```

Following is the mapped seccomp profile:

```json
{
  "defaultAction":"SCMP_ACT_ERRNO",
  "architectures":[
     "SCMP_ARCH_X86_64",
     "SCMP_ARCH_X86",
     "SCMP_ARCH_X32"
  ],
  "syscalls":[
     {
      "names":[
          "accept4",
          "epoll_wait",
          "pselect6",
          "futex",
          "madvise"
      ],
      "action":"SCMP_ACT_ALLOW"
     }
  ]
}
```

### Rational for separate `Kind: KubeArmorSeccompPolicy` (kscmp for short)

K8s, Docker or any other container runtime allows the user to set just a single seccomp policy per pod. The seccomp policy has to be annotated as part of the container label and the pod needs to be restarted for any change in the policy. This is the primary reason for having a separate `kscmp` kind and not just reusing the existing `ksp` with seccomp rules.

#### Handling multiple `kscmp` policies per pod

There could be at most one seccomp policy per container. Thus when there are multiple seccomp policies pushed for the same pod then the seccomp rules have to be merged. General rule of thumb would be that a syscall deny would always take precedence in case there are multiple seccomp rules for the same syscall.

Consider an example:

1. Policy 1: kscmp1 - allow{s1, s2, s4}, deny{s3}
2. Policy 2: kscmp2 - allow{s1, s3}, deny{s2} Here s1, s2, s3, s4 are 4 different syscalls and kscmp1/2 are two `KubeArmorSeccompPolicy`.
Final Seccomp Profile after merging the kscmp policies will be: allow {s1, s4}, deny {s2, s3}

Lets assume that policy kscmp2 get deleted at a later point in time. The final seccomp profile in that case would be: allow{s1, s2, s4}, deny{s3}

### Do we need to use any third-party library (such as libseccomp)?

In case of k8s, the underlying container runtime (such as docker, containerd) does the job of enforcement. The enforcement can be done only by the process that forks the workloads and in case of k8s that process is runc.

Kubearmor needs to create the json profile and set the annotations appropriately for the container runtime to use it. For VM/bare-metal workloads, we need to do the same with systemd i.e., instruct systemd to use a given seccomp profile (example here). For VM/bare-metal with containers (but without k8s), the runc/docker comes into the play again since they spawn the workload processes and are in charge of setting seccomp profile.

libseccomp is primarily needed if someone wants to attach an ebpf filter with seccomp. seccomp-ebpf filter won't be needed for whitelist/blacklist based rules. Also I see that docker profile allows us to specify "parameterized syscalls" using the json profile as an input, so that takes care of even advanced use cases. (I checked that docker/runc do not internally link to libseccomp).

### TODOs

- [ ] KubeArmor restart: Reload seccomp profiles
- [ ] What happens when the workload moves from one node to another and that the architectures (x86, arm,...) of these two nodes differ?
- [ ] Volume mount for /etc/seccomp ... The /etc/seccomp has to be created when kubearmor is deployed.
- [ ] Test: Even if apparmor/selinux is not available, seccomp should still work
- [ ] Prepare DevSecOps flow for managing/handling seccomp policies with auto discovery.
- [ ] Handle creation of /var/lib/kubelet/seccomp/ folder during KubeArmor init time.
- [ ] Check location of seccomp folder on different k8s implementations (k3s/minikube/GKE/EKS/AKS)