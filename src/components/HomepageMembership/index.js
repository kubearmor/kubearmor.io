import React from "react";
import styles from "./styles.module.css";
import membershipLogo1 from "../../../static/img/os-membership/membership-cncf.png";
import membershipLogo2 from "../../../static/img/os-membership/membership-lf.png";
import membershipLogo3 from "../../../static/img/os-membership/membership-nephio.png";
import membershipLogo4 from "../../../static/img/os-membership/membership-openssf.png";

export default function HomepageMembership() {
  return (
    <section className={`membership ${styles.membership}`}>
      <h3 className={styles.membershipTitle}>Open Source Membership</h3>
      <div className={styles.members}>
        <img
          className={styles.member}
          onClick={(e) => {
            window.location.href = "https://www.cncf.io/";
          }}
          src={membershipLogo1}
          alt="member logo"
        />
        <img
          className={styles.member}
          onClick={(e) => {
            window.location.href = "https://lfx.linuxfoundation.org/";
          }}
          src={membershipLogo2}
          alt="member logo"
        />
        <img
          className={styles.member}
          onClick={(e) => {
            window.location.href = "https://nephio.org/";
          }}
          src={membershipLogo3}
          alt="member logo"
        />
        <img
          className={styles.member}
          onClick={(e) => {
            window.location.href = "https://openssf.org/";
          }}
          src={membershipLogo4}
          alt="member logo"
        />
      </div>
    </section>
  );
}
