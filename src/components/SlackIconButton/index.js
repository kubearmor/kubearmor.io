import Link from "@docusaurus/Link";
import React from "react";
import {FaSlack} from "react-icons/fa6";
import styles from "./styles.module.css";

export default function SlackIconButton () {
    return (
      <Link
        className={`slack-icon-button ${styles.button}`}
        to="https://join.slack.com/t/kubearmor/shared_invite/zt-2bhlgoxw1-WTLMm_ica8PIhhNBNr2GfA"
      >
        <FaSlack color="var(--color-white)" />
        Join Slack
      </Link>
    );
}