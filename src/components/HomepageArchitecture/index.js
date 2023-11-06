import React from "react";
import styles from "./styles.module.css";
import architectureImage from "../../../static/img/architecture/architecture-illustration.webp";

export default function HomepageArchitecture() {
  return (
    <section className={`architecture ${styles.architecture}`}>
      <h2 className={styles.architectureTitle}>ARCHITECTURE</h2>
      <h1 className={styles.architectureHeader}>
        First K8s Security Engine to Leverage BPF-LSM
      </h1>
      <p className={styles.architectureDescription}>
        KubeArmor is a runtime Kubernetes security engine. It uses eBPF and
        Linux Security Modules(LSM) for fortifying workloads based on Cloud
        Containers, IoT/Edge, and 5G networks. It enforces policy-based
        controls.
      </p>
      <img className={styles.architectureImage} aria-label="architecture image" src={architectureImage} alt="architecture image"/>
    </section>
  );
}
