import React from "react";
import styles from "./styles.module.css";
import AdoptersLogo1 from "../../../static/img/adopters/adopter-accuknox.svg";
import adoptersLogo2 from "../../../static/img/adopters/adopter-openhorizon.webp";
import adoptersLogo3 from "../../../static/img/adopters/adopter-intel-smart-edge.webp";
import Link from "@docusaurus/Link";
import { FaAngleRight } from "react-icons/fa6";

export default function HomepageAdopters () {
    return (
      <section className={`adopters ${styles.adopters}`}>
        <div className={styles.adoptersLogos}>
          <h4 className={styles.adoptersTitle}>Adopted By</h4>
          <div className={styles.logos}>
            <AdoptersLogo1
              className={styles.logo}
              onClick={(e) => {
                window.location.href = "https://www.accuknox.com/";
              }}
              alt="adopter logo"
            />
            <img
              className={styles.logo}
              onClick={(e) => {
                window.location.href = "https://open-horizon.github.io/";
              }}
              src={adoptersLogo2}
              alt="adopter logo"
            />
            <img
              className={styles.logo}
              onClick={(e) => {
                window.location.href =
                  "https://www.intel.com/content/www/us/en/edge-computing/smart-edge.html";
              }}
              src={adoptersLogo3}
              alt="adopter logo"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.containerContent}>
            <h3 className={styles.containerTitle}>Want to Add Your Logo ?</h3>
            <p className={styles.containerDescription}>
              Be one of the adopters for our organization
            </p>
          </div>
          <Link
            to="https://github.com/kubearmor/KubeArmor/blob/main/ADOPTERS.md"
            className={styles.containerButton}
          >
            Apply
            <FaAngleRight color="var(--color-primary)" />
          </Link>
        </div>
      </section>
    );
}