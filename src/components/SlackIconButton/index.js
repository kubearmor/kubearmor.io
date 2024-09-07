import Link from "@docusaurus/Link";
import React from "react";
import {FaSlack} from "react-icons/fa6";
import styles from "./styles.module.css";

export default function SlackIconButton () {
    return (
      <Link
        className={`slack-icon-button ${styles.button}`}
        to="https://cloud-native.slack.com/archives/C07EF44HWQM"
      >
        <FaSlack color="var(--color-white)" />
        Join Slack
      </Link>
    );
}
