import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import sandboxImage from "../../../static/img/sandbox/membership-cncf.png";

export default function HomepageSandbox() {
  return (
    <section className={`Section sandbox ${styles.sandbox}`}>
      <div className={`container`}>
        <h4 className={styles.sandboxText}>
          We are a&nbsp;
          <Link to="https://www.cncf.io/projects/kubearmor/">CNCF Sandbox</Link>
          &nbsp;project.
        </h4>
        <Link to="https://www.cncf.io/projects/kubearmor/">
          <img className={styles.logo} src={sandboxImage} alt="logo" />
        </Link>
        <h4 className={styles.sandboxText} style={{ fontSize: "1rem" }}>
          The Linux Foundation® (TLF) has registered trademarks and uses trademarks. For a list of TLF trademarks, see <Link to="https://www.linuxfoundation.org/trademark-usage/">Trademark Usage</Link>.
        </h4>
      </div>
    </section>
  );
}
