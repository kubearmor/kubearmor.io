import React from "react";
import styles from "./styles.module.css";

export default function HomepageMilestones() {
  return (
    <section className={`Section mileStones ${styles.mileStones}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h1>Milestones</h1>
        </div>
        <div className={`section-margin ${styles.milestoneCards}`}>
          <div>
            <h3>2020</h3>
            <ul>
                <li>KubeArmor project architecture</li>
                <li>MVP Launch </li>
            </ul>
          </div>
          <div>
            <h3>2021</h3>
            <ul>
                <li>Released v0.1, stable version</li>
                <li>CNCF Sandbox Acceptance (November 16)</li>
            </ul>
          </div>
          <div>
            <h3>2022</h3>
            <ul>
                <li>Surpassed 300K+ downloads</li>
                <li>Gained traction in the open-source community</li>
            </ul>
          </div>
          <div>
            <h3>2023</h3>
            <ul>
                <li>Reached 10+ industry adopters, validating enterprise-grade capabilities</li>
                <li>Listed on AWS  and Redhat Marketplace</li>
                <li>Released v1.0 - production-ready solution</li>
            </ul>
          </div>
          <div>
            <h3>2024</h3>
            <ul>
                <li>Over 1+ Million downloads</li>
                <li>Earned 1,300+ GitHub stars, showcasing community engagement</li>
                <li>Listed on Oracle and Digital Ocean Marketplace</li>
                <li>Launched comprehensive KubeArmor Book, enhancing user education</li>
                <li>Introduced the KOSHER program</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
