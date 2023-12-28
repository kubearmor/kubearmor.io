---
slug: KubeArmor-Performance-Benchmarking-Data
title: KubeArmor Performance Benchmarking Data
authors: DelusionalOptimist
tags: [performance]
---

## Benchmarking data

### Config

* Node: 4
* Platform - AKS
* Workload -> Sock-shop
* replica: 1
* Tool -> Apache-bench (request at front-end service)
* Vm: DS_v2

|   VM   |  CPU  |  Ram  | Data disks | Temp Storage |
| :----: | :---: | :---: | :--------: | :----------: |
| DS2_v2 |   2   | 7 GiB |     8      |    14 GiB    |

### Without Kubearmor

#### Average

|   Scenario   | Requests | Concurrent Requests | Kubearmor CPU (m) | Kubearmor Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | Micro-service CPU (m) | Micro-service Memory (Mi) |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2205.502      |           0.4534           |         0         |         401.1         |        287.3333333        |

<details>

<summary>
Readings
</summary>

|   Scenario   | Requests | Concurrent Requests | Kubearmor CPU (m) | Kubearmor Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | Micro-service CPU (m) | Micro-service Memory (Mi) |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2246.79      |           0.445           |         0         |         380         |        239        |
| -- |  --   |        --         |         --         |           --           |      --      |           --           |       --         |         --        |        --        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2187.22      |           0.457           |         0         |         378         |        358        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2244.16      |           0.446           |         0         |         451         |        258        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2213.37      |           0.452           |         0         |         351         |        304        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2131.19      |           0.469           |         0         |         380         |        251        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2215.89      |           0.451           |         0         |         400         |        326        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2172.19      |           0.46           |         0         |         428         |        332        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2195.73      |           0.455           |         0         |         444         |        240        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2206.41      |          0.453           |         0         |         385         |        278        |
| no kubearmor |  50000   |        5000         |         -         |           -           |      2242.07      |           0.446           |         0         |         414         |        318        |
| Average |     |                |                  |                      |      2205.502      |           0.4534           |         0         |         401.1         |        287.3333333        |

</details>

### Kubearmor with discovered Policy Applied

#### Average

|   Scenario   | Requests | Concurrent Requests | Kubearmor CPU (m) | Kubearmor Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | Micro-service CPU (m) | Micro-service Memory (Mi) |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
| no kubearmor |  50000   |        5000         |         141.2         |           111.9           |      2169.358      |           0.4609           |         0         |         438.2         |        435.1        |

<details>

<summary>
Readings
</summary>

|   Scenario   | Requests | Concurrent Requests | Kubearmor CPU (m) | Kubearmor Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | Micro-service CPU (m) | Micro-service Memory (Mi) |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
| with Policy |  50000   |        5000         |         131         |           113           |      2162.86      |           0.462           |         0         |         542         |        446        |
| with Policy |  50000   |        5000         |         139         |           111           |      2190.72      |           0.456           |         0         |         457         |        458        |
| with Policy |  50000   |        5000         |         145         |           112           |      2103.46      |           0.475           |         0         |         445         |        395        |
| with Policy |  50000   |        5000         |         149         |           108           |      2155.55      |           0.464           |         0         |         440         |        454        |
| with Policy |  50000   |        5000         |         129         |           113           |      2177.68      |           0.459           |         0         |         395         |        394        |
| with Policy |  50000   |        5000         |         160         |           122           |      2198.53      |           0.455           |         0         |         435         |        503        |
| with Policy |  50000   |        5000         |         156         |           117           |      2179.89      |           0.459           |         0         |         391         |        451        |
| with Policy |  50000   |        5000         |         134         |           119           |      2196.78      |           0.455           |         0         |         408         |        429        |
| with Policy |  50000   |        5000         |         129         |           114           |      2178.07      |          0.459           |         0         |         424         |        435        |
| with Policy |  50000   |        5000         |         140         |           112           |      2150.04      |          0.465           |         0         |         445         |        386        |
| Average |     |                |         141.2         |          111.9            |      2169.358      |           0.4609           |         0         |         438.2         |        435.1        |

</details>

### BPF LSM benchmarking data

|   Scenario   | Config |  | KubeArmor |  | Microservices |  |  |  |  |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
|      | Requests | Concurrent Requests | CPU (m) | Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | CPU (m) | Memory (Mi) |
| with kubearmor |  50000   |        5000         |         130         |           99           |      1889.81      |           0.529           |         0         |         407         |        324        |
| with kubearmor |  50000   |        5000         |         120         |           104           |      1955.26      |           0.511           |         0         |         446         |        423        |
| with kubearmor |  50000   |        5000         |         122         |           101           |      1952.94      |           0.512           |         0         |         433         |        448        |
| with kubearmor |  50000   |        5000         |         152         |           104           |      1931.71      |           0.518           |         0         |         474         |        405        |
| with kubearmor |  50000   |        5000         |         142         |           108           |      1896.01      |           0.527           |         0         |         564         |        413        |
| with kubearmor |  50000   |        5000         |         110         |           107           |      1896.95      |           0.527           |         0         |         416         |        375        |
| with kubearmor |  50000   |        5000         |         115         |           106           |      1868.77      |           0.535           |         0         |         354         |        383        |
| with kubearmor |  50000   |        5000         |         114         |           109           |      1877.29      |           0.533           |         0         |         461         |        355        |
| with kubearmor |  50000   |        5000         |         130         |           105           |      1962.81      |          0.509           |         0         |         552         |        380        |
| with kubearmor |  50000   |        5000         |         102         |           110           |      1966.19      |          0.509           |         0         |         351         |        297        |
| Average |     |                |         123.7         |          105.3            |      1919.774      |           0.521           |         0         |         445.8         |        380.3        |

|   Scenario   | Config |  | KubeArmor |  | Microservices |  |  |  |  |
| :----------: | :------: | :-----------------: | :---------------: | :-------------------: | :----------------: | :------------------------: | :---------------: | :-------------------: | :-----------------------: |
|      | Requests | Concurrent Requests | CPU (m) | Memory (Mi) | Throughput (req/s) | Average time per req. (ms) | # Failed requests | CPU (m) | Memory (Mi) |
| with policy |  50000   |        5000         |         103         |           110           |      1806.06      |           0.529           |         0         |         431         |        330        |
| with policy |  50000   |        5000         |         122         |           111           |      1836.04      |           0.511           |         0         |         432         |        348        |
| with policy |  50000   |        5000         |         123         |           108           |      1871.02      |           0.512           |         0         |         505         |        393        |
| with policy |  50000   |        5000         |         118         |           111           |      1915.07      |           0.518           |         0         |         599         |        331        |
| with policy |  50000   |        5000         |         121         |           110           |      1896.34      |           0.527           |         0         |         405         |        310        |
| with policy |  50000   |        5000         |         126         |           113           |      1896.7      |           0.527           |         0         |         450         |        430        |
| with policy |  50000   |        5000         |         117         |           110           |      1915.79      |           0.535           |         0         |         408         |        382        |
| with policy |  50000   |        5000         |         128         |           111           |      1885.77      |           0.533           |         0         |         482         |        321        |
| with policy |  50000   |        5000         |         122         |           114           |      1900.96      |          0.509           |         0         |         433         |        359        |
| with policy |  50000   |        5000         |         124         |           104           |      1887.87      |          0.509           |         0         |         448         |        393        |
| Average |     |                |         120.4         |          110.2            |      1881.162      |           0.5318           |         0         |         459.3         |        359.7        |