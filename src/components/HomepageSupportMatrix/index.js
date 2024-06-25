import React from "react";
import styles from "./styles.module.css";
import AwsMarketplaceImage from "../../../static/img/support-matrix/support-matrix.gif";
import Link from "@docusaurus/Link";
import RedirectButton from "../RedirectButton";

export default function HomepageSupportMatrix() {
  return (
    <section className={`Section supportmatrix ${styles.supportmatrix}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h1>Kernel Support Matrix</h1>
        </div>
        <div className={styles.supportmatrix}>
          <img
            src={AwsMarketplaceImage}
            alt="Aws Marketplace logo"
            target="_blank"
          />
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectText="Learn More"
            redirectLink="https://help.accuknox.com/support-matrix/kubearmor-support-matrix/"
          />
        </div>
      </div>
    </section>
  );
}
