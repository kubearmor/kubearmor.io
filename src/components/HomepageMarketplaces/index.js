import React from "react";
import styles from "./styles.module.css";
// import AwsMarketplaceImage from "../../../static/img/marketplace/aws-marketplace.svg";
// import OracleMarketplaceImage from "../../../static/img/marketplace/oracle-cloud-marketplace.svg";
// import RedhatMarketplaceImage from "../../../static/img/marketplace/redhat-marketplace.svg";
// import DigitalOceanImage from "../../../static/img/marketplace/digital-ocean.svg";

import AwsMarketplaceImage from "../../../static/img/marketplace/aws-marketplace.webp";
import OracleMarketplaceImage from "../../../static/img/marketplace/oracle-cloud-marketplace.webp";
import RedhatMarketplaceImage from "../../../static/img/marketplace/redhat-marketplace.webp";
import DigitalOceanImage from "../../../static/img/marketplace/digital-ocean.webp";

import RedirectButton from "../RedirectButton";
import Link from "@docusaurus/Link";

export default function HomepageMarketplaceImages() {
  return (
    <section className={`Section marketplaceImages ${styles.market}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h1>KubeArmor is Now Available on</h1>
        </div>
        {/* <p className={styles.marketText}>KubeArmor is Now Available on</p> */}
        {/* <div className={styles.marketImage}>
          <AwsMarketplaceImage/>
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectText="Install Now"
            redirectLink="https://aws.amazon.com/marketplace/pp/prodview-5npox4ixz64qk"
          />
        </div> */}
        <div className={styles.marketImage}>
          <Link to="https://aws.amazon.com/marketplace/pp/prodview-5npox4ixz64qk">
            <img
              src={AwsMarketplaceImage}
              alt="Aws Marketplace logo"
              target="_blank"
            />
          </Link>
          <Link to="https://catalog.redhat.com/software/container-stacks/detail/6368860f558779d5f81e157e">
            <img
              src={RedhatMarketplaceImage}
              alt="Redhat Marketplace logo"
              target="_blank"
            />
          </Link>
          <Link to="https://cloudmarketplace.oracle.com/marketplace/en_US/listing/165530897">
            <img
              src={OracleMarketplaceImage}
              alt="Oracle Marketplace logo"
              target="_blank"
            />
          </Link>
          <Link to="https://marketplace.digitalocean.com/apps/kubearmor">
            <img
              src={DigitalOceanImage}
              alt="Digital Ocean logo"
              target="_blank"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
