import React, {useState, useEffect, useRef} from "react";
import styles from "./styles.module.css";
import installationImage from "../../../static/img/installation/installation-illustration.webp";
import { FaCirclePlay, FaRegCopy } from "react-icons/fa6";
import RedirectButton from "../RedirectButton";

export default function HomepageInstallation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const videoId = "CH0qtp5DAhs";
  useEffect(() => {
    const player = playerRef.current;

    if (player) {
      const onReady = () => {
        player.addEventListener("onReady", onReady);
      };

      player.addEventListener("onReady", onReady);

      return () => {
        player.removeEventListener("onReady", onReady);
      };
    }
  }, [playerRef]);
  const code = `
export HELM_EXPERIMENTAL_OCI=1

aws ecr get-login-password \\
    --region us-east-1 | helm registry login \\
    --username AWS \\
    --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com

mkdir awsmp-chart && cd awsmp-chart

helm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/accuknox/kubearmor --version 0.10.3

tar xf $(pwd)/* && find $(pwd) -maxdepth 1 -type f -delete

helm install kubearmor \\
    --namespace <ENTER_NAMESPACE_HERE> ./* 
    `;

  function copyToClipboard() {
    if (!navigator.clipboard) {
      return;
    }
    const clipboardItem = new ClipboardItem({
      "text/plain": new Blob([code], { type: "text/plain" }),
    });
    navigator.clipboard.write([clipboardItem]);
  }

  const handleClick = () => {
    copyToClipboard(code);
    window.alert("Code Copied Successfully!");
  };
  const closePlayer = () => {
    setIsPlaying(false);
  };
  return (
    <section className={`installation ${styles.installation}`}>
      <h2 className={styles.installationTitle}>INSTALLATION</h2>
      <h1 className={styles.installationHeader}>How to Install KubeArmor?</h1>
      <div className={styles.installationContainer}>
        <div className={styles.guide}>
          <h4 className={styles.guideTitle}>
            Boost your security with KubeArmor in simple steps
          </h4>
          <p className={styles.guideText}>
            Download and install KubeArmor via helm chart{" "}
          </p>
          <div className={styles.codeContainer}>
            <FaRegCopy
              className={styles.codeCopy}
              size={20}
              onClick={handleClick}
            />
            <pre id="code-block" className={styles.codeBlock}>
              <code className={styles.code}>{code}</code>
            </pre>
          </div>
          <p className={styles.guideText}>
            For configuration options and further information
          </p>
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectText="Read Documentation"
            redirectLink="https://docs.kubearmor.io/kubearmor/quick-links/deployment_guide"
          />
        </div>
        <div className={styles.showcase}>
          <img
            className={styles.installationImage}
            src={installationImage}
            alt="installation image"
          />
          <button
            className={styles.installationVideo}
            onClick={() => setIsPlaying(true)}
          >
            <FaCirclePlay className={styles.playIcon} size={32} />
            Watch Installation Video
          </button>
          {isPlaying && (
            <div className={styles.youtubeOverlay} onClick={closePlayer}>
              <div className={styles.youtubePlayer}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube Player"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
