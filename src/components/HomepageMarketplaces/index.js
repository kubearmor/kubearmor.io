import React from "react";
import styles from "./styles.module.css";
import MarketplaceImage from "../../../static/img/marketplace/marketplace-aws.svg";
import RedirectButton from "../RedirectButton";

export default function HomepageMarketplaceImages() {
  return (
    <section className={`marketplaceImages ${styles.market}`}>
      <p className={styles.marketText}>KubeArmor is Now Available on</p>
      <MarketplaceImage className={styles.marketImage} />
      <RedirectButton
        redirectColor="var(--color-primary)"
        redirectText="Install Now"
        redirectLink="https://aws.amazon.com/marketplace/pp/prodview-5npox4ixz64qk"
      />
    </section>
  );
}
