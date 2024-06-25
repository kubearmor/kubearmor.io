import React from "react";
import styles from "./styles.module.css";
import AdoptersLogo1 from "../../../static/img/adopters/adopter-accuknox.svg";
import adoptersLogo2 from "../../../static/img/adopters/adopter-openhorizon.webp";
import adoptersLogo3 from "../../../static/img/adopters/adopter-intel-smart-edge.webp";
import adoptersLogo4 from "../../../static/img/adopters/adopter-se.png";
import adoptersLogo5 from "../../../static/img/adopters/anylog.webp";
import adoptersLogo6 from "../../../static/img/adopters/phoenix.webp";
import Link from "@docusaurus/Link";
import RedirectButton from "../RedirectButton";
import { FaAngleRight } from "react-icons/fa6";

export default function HomepageAdopters() {
  return (
    <section className={`Section adopters ${styles.adopters}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h1 className={styles.adoptersTitle}>Adopted By</h1>
        </div>
        <div className={styles.adoptersLogos}>
          <div className={styles.logos}>
            <Link to="https://open-horizon.github.io/">
              <img
                className={styles.logo}
                src={adoptersLogo2}
                alt="adopter logo"
              />
            </Link>
            <Link to="https://www.accuknox.com/">
              <AdoptersLogo1
                className={`${styles.logo} ${styles.accuknox}`}
                alt="adopter logo"
              />
            </Link>
            <Link to="https://www.intel.com/content/www/us/en/edge-computing/smart-edge.html">
              <img
                className={styles.logo}
                src={adoptersLogo3}
                alt="adopter logo"
              />
            </Link>
            <Link to="https://www.5gsec.com/">
              <img
                className={styles.logo}
                src={adoptersLogo4}
                alt="adopter logo"
              />
            </Link>
            <Link to="https://r6security.com/">
              <img
                className={styles.logo}
                src={adoptersLogo5}
                alt="adopter logo"
              />
            </Link>
            <Link to="https://anylog.co/">
              <img
                className={styles.logo}
                src={adoptersLogo6}
                alt="adopter logo"
              />
            </Link>
          </div>
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectText="Add your Logo"
            redirectLink="https://github.com/kubearmor/KubeArmor/blob/main/ADOPTERS.md"
          />
        </div>
      </div>
    </section>
  );
}
