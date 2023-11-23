import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeroImage from "../../../static/img/hero/hero-mascot.svg";
import Button from "../Button/index";
import styles from "./styles.module.css";
import { FaLock, FaAngleRight } from "react-icons/fa6";
import RedirectButton from "../RedirectButton";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={`hero ${styles.hero}`}>
      <div className={styles.container}>
        <Link
          className={styles.heroAnnouncement}
          to="https://github.com/kubearmor/KubeArmor/wiki/v1.0-Release-Blog"
        >
          <FaLock className={styles.heroIcon} color="var(--color-primary)" />
          KubeArmor v1.0 is here!
          <FaAngleRight
            className={styles.heroIcon}
            color="var(--color-primary)"
          />
        </Link>
        <h1 className={styles.heroTitle}>{siteConfig.tagline}</h1>
        <p className={styles.heroSubtitle}>
          KubeArmor is a runtime Kubernetes security engine. It uses eBPF and
          Linux Security Modules(LSM) for fortifying workloads based on Cloud
          Containers, IoT/Edge, and 5G networks. It enforces policy-based
          controls.
        </p>
        <div className={styles.callToAction}>
          <Button
            bgColor="var(--color-primary)"
            textColor="var(--color-white)"
            buttonText="Try KubeArmor"
            buttonLink="https://docs.kubearmor.io/kubearmor/quick-links/deployment_guide"
          />
        </div>
      </div>
      <HeroImage className={styles.heroImage} />
    </header>
  );
}
