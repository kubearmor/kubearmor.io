import React from "react";
import styles from "./styles.module.css";
import architectureImage from "../../../static/img/architecture/architecture-diagram.webp";
import kubearmorLogo from "../../../static/img/architecture/kemblem.png";
import modelarmorLogo from "../../../static/img/architecture/memblem.png";

export default function HomepageArchitecture() {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100px",
          margin: "0rem 0",
        }}
      >
        {/* KubeArmor Column */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#082C75",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0rem 12rem",
            color: "white",
          }}
        >
          <img
            src={kubearmorLogo}
            alt="KubeArmor Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <div>
            <h2 style={{ margin: "0 0 0.3rem 0" }}>KubeArmor DataSheet</h2>
            <a
              href="../pdfs/kubearmor-datasheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#ffffff",
                color: "#082C75",
                padding: "0.4rem 0.8rem",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "500",
                fontSize: "0.85rem",
              }}
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* ModelArmor Column */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#8FBBFE",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 12rem",
            color: "#082C75",
          }}
        >
          <img
            src={modelarmorLogo}
            alt="ModelArmor Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <div>
            <h2 style={{ margin: "0 0 0.3rem 0" }}>ModelArmor DataSheet</h2>
            <a
              href="../pdfs/modelarmor-datasheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#ffffff",
                color: "#082C75",
                padding: "0.4rem 0.8rem",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "500",
                fontSize: "0.85rem",
              }}
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
