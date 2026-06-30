import React, { useState, useEffect } from "react";

export default function LatestRelease() {
  const [version, setVersion] = useState("v1.7.3");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kubearmor/KubeArmor/main/STABLE-RELEASE"
        );
        const text = await response.text();
        const trimmed = text.trim();
        if (trimmed) {
          setVersion(trimmed);
        }
      } catch (error) {
        console.error("Error fetching stable release:", error);
      }
    };

    fetchVersion();
  }, []);

  const releaseUrl = `https://github.com/kubearmor/KubeArmor/releases/tag/${version}`;

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Latest stable release</h2>
      <p>
        The current stable release is{" "}
        <a href={releaseUrl} target="_blank" rel="noopener noreferrer">
          <strong>{version}</strong>
        </a>
        . See all past releases on the{" "}
        <a
          href="https://github.com/kubearmor/KubeArmor/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          Release Notes
        </a>{" "}
        page.
      </p>
    </section>
  );
}
