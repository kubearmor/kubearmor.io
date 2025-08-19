import React from "react";
import styles from "./styles.module.css";
import architectureImage from "../../../static/img/architecture/architecture-diagram.webp";
import kubearmorLogo from "../../../static/img/architecture/kemblem.png";
import modelarmorLogo from "../../../static/img/architecture/memblem.png";

export default function HomepageArchitecture() {
  return (
    <>
      <section className={styles.datasheetSection}>
        {/* KubeArmor Column */}
        <div className={styles.kubearmorColumn}>
          <img
            src={kubearmorLogo}
            alt="KubeArmor Logo"
            className={styles.kubearmorLogo}
          />
          <div className={styles.kubearmorContent}>
            <h2>KubeArmor DataSheet</h2>
            <a
              href="../pdfs/kubearmor-datasheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.kubearmorDownload}
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* ModelArmor Column */}
        <div className={styles.modelarmorColumn}>
          <img
            src={modelarmorLogo}
            alt="ModelArmor Logo"
            className={styles.modelarmorLogo}
          />
          <div className={styles.modelarmorContent}>
            <h2>ModelArmor DataSheet</h2>
            <a
              href="../pdfs/modelarmor-datasheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modelarmorDownload}
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className={`Section architecture ${styles.architecture}`}>
        <div className={`container`}>
          <div className={`centerSectionHeading`}>
            <h2>ARCHITECTURE</h2>
            <h1>First K8s Security Engine to Leverage BPF-LSM</h1>
            <p>
              KubeArmor is a runtime Kubernetes security engine. It uses eBPF
              and Linux Security Modules(LSM) for fortifying workloads based on
              Cloud Containers, IoT/Edge, and 5G networks. It enforces
              policy-based controls.
            </p>
          </div>
          <img
            className={styles.architectureImage}
            aria-label="architecture image"
            src={architectureImage}
            alt="architecture image"
          />
        </div>
      </section>
    </>
  );
}
