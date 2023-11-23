import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import sandboxImage from "../../../static/img/sandbox/membership-cncf.png";

export default function HomepageSandbox() {
  return (
    <section className={`sandbox ${styles.sandbox}`}>
      <h4 className={styles.sandboxText}>
        We are a&nbsp;
        <Link to="https://www.cncf.io/projects/kubearmor/">CNCF Sandbox</Link>
        &nbsp;project.
      </h4>
      <Link to="https://www.cncf.io/projects/kubearmor/">
        <img className={styles.logo} src={sandboxImage} alt="logo" />
      </Link>
    </section>
  );
}
