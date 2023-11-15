import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import RedirectButton from "../RedirectButton";

export default function HomepageSupport () {
    return (
      <section className={`support ${styles.support}`}>
        <div
          className={styles.supportImage}
        >
          <div className={styles.supportText}>
            <h1 className={styles.supportHeader}>
              Effortless and Efficient Runtime Security in Minutes
            </h1>
            <p className={styles.supportDescription}>
              KubeArmor supports public and private Kubernetes deployments
            </p>
          </div>
          <div className={styles.supportCTA}>
            <Button
              bgColor="var(--color-white)"
              buttonLink="https://docs.kubearmor.io/kubearmor/"
              textColor="var(--color-primary)"
              buttonText="Try KubeArmor"
            />
            <RedirectButton
              redirectColor="var(--color-white)"
              redirectLink="https://docs.kubearmor.io/kubearmor/quick-links/deployment_guide"
              redirectText="Read Documentation"
              className={styles.supportRedirect}
            />
          </div>
        </div>
      </section>
    );
}