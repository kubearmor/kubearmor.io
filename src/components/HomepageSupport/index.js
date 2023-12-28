import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";

export default function HomepageSupport() {
  return (
    <section className={`Section support ${styles.support}`}>
      <div className={`container`}>
        <div className={` ${styles.supportImage}`}>
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
              textColor="var(--color-primary)"
              buttonLink="https://killercoda.com/kubearmor/scenario/usecases"
              buttonText="Learn KubeArmor Basics"
              className={styles.supportRedirect}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
