import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./styles.module.css";
import featuresImage from "../../../static/img/features/features-illustration.webp";
import CreatorLogo from "../../../static/img/accuknox/accuknox-light-bg.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featuresContent from "./content.json";
import { icons } from "./icons";

function Item(props) {
  const Icon = props.icon;

  return (
    <div className={styles.content}>
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.contentHeader}>{props.feature}</h3>
        <p className={styles.contentDescription}>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={`features ${styles.features}`}>
      <h2 className={styles.featuresTitle}>FEATURES</h2>
      <h1 className={styles.featuresHeader}>What Makes KubeArmor Unique?</h1>
      <div className={`features-container ${styles.container} `}>
        {/* <div className={`features-progress-bar ${styles.progressBar}`}>0%</div> */}
        <div className={`features-content ${styles.containerContent}`}>
          {featuresContent.map((item) => (
            <Item
              key={item.id}
              feature={item.feature}
              description={item.description}
              icon={icons[item.icon]}
            />
          ))}
        </div>
        {/* <img
          src={featuresImage}
          className={styles.featuresImage}
          alt="feature image"
        /> */}
      </div>
      <div className={styles.creator}>
        Created By
        <CreatorLogo className={styles.creatorLogo} />
      </div>
    </section>
  );
}
