import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import heroImage from "../../../static/img/hero/hero-mascot.svg";
import heroImage from "../../../static/img/hero/hero-mascot.webp";
import creatorLogo from "../../../static/img/hero/accuknox-logo.png";
import ctaKubearmor from "../../../static/img/hero/cta-kubearmor.webp";
import ctaModelarmor from "../../../static/img/hero/cta-modelarmor.webp";
import Button from "../Button/index";
import styles from "./styles.module.css";
import { FaLock, FaAngleRight } from "react-icons/fa6";
import RedirectButton from "../RedirectButton";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.heroBannerSection}>
      <div className={`container`}>
        <div className={`hero ${styles.hero}`}>
          <div className={styles.container}>
            <div className={styles.heroAnnouncementWrapper}>
              <Link
                className={styles.heroAnnouncement}
                to="https://github.com/kubearmor/KubeArmor/wiki/v1.4.0-Release-Blog"
              >
                <div>
                  <FaLock
                    className={styles.heroIcon}
                    color="var(--color-primary)"
                  />
                  KubeArmor v1.4.0 is here!
                </div>
                <FaAngleRight
                  className={styles.heroIcon}
                  color="var(--color-primary)"
                />
              </Link>
              <p>1.2 Million+ Downloads</p>
            </div>
            <h1 className={styles.heroTitle}>{siteConfig.tagline}</h1>
            <p className={styles.heroSubtitle}>
              KubeArmor is a runtime Kubernetes security engine. It uses eBPF
              and Linux Security Modules(LSM) for fortifying workloads based on
              Cloud Containers, IoT/Edge, and 5G networks. It enforces
              policy-based controls.
            </p>
            <div className={styles.callToAction}>
              <Link
                to="https://docs.kubearmor.io/kubearmor/quick-links/deployment_guide"
                className={styles.creatorContainer}
              >
                <img
                  aria-label="ctaKubearmor"
                  src={ctaKubearmor}
                  alt="ctaKubearmor"
                />
              </Link>
              <Link
                to="https://help.accuknox.com/use-cases/modelarmor/"
                className={styles.creatorContainer}
              >
                <img
                  aria-label="ctaModelarmor"
                  src={ctaModelarmor}
                  alt="ctaModelarmor"
                />
              </Link>
            </div>
            <div className={styles.createdBy}>
              <p>Created By</p>
              <Link
                to="https://www.accuknox.com/"
                className={styles.creatorContainer}
              >
                <img
                  aria-label="accuknox image"
                  src={creatorLogo}
                  alt="accuknox image"
                />
                {/* <CreatorLogo className={styles.creatorLogo} /> */}
              </Link>
            </div>
          </div>
          <div>
            {/* <HeroImage className={styles.heroImage} /> */}
            <img
              className={``}
              aria-label="architecture image"
              src={heroImage}
              alt="architecture image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
