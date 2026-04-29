import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const cx = (...names) =>
  names
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

const Ic = {
  arrow: (props) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  flag: (props) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 22V4M4 4h13l-2 4 2 4H4" />
    </svg>
  ),
  check: (props) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  trophy: (props) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 4h3v3a3 3 0 0 1-3 3M7 4H4v3a3 3 0 0 0 3 3" />
    </svg>
  ),
  gift: (props) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5" />
    </svg>
  ),
  medal: (props) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 3l5 8 5-8M7 3h10M9 11l-3 3M15 11l3 3" />
      <circle cx="12" cy="16" r="5" />
    </svg>
  ),
  spark: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" />
    </svg>
  ),
  browser: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 6.5h.01M11 6.5h.01" />
    </svg>
  ),
  users: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  share: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4" />
      <path d="M15.4 6.5l-6.8 4" />
    </svg>
  ),
  repo: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M14 3v4h4" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  ),
  message: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  ),
  route: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h5a4 4 0 0 0 4-4V5" />
      <path d="m13 8 5-5 5 5" />
    </svg>
  ),
  key: (props) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15 8 3 3" />
      <path d="m17 6 3 3" />
    </svg>
  ),
};

const RegForm = ({ tallyUrl }) => {
  useEffect(() => {
    const d = document;
    const scriptSrc = "https://tally.so/widgets/embed.js";
    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
      return;
    }

    if (!d.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = d.createElement("script");
      script.src = scriptSrc;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      d.body.appendChild(script);
      return;
    }

    loadEmbeds();
  }, [tallyUrl]);

  return (
    <div className={cx("reg-card")} id="register">
      <div className={cx("reg-body")}>
        <h3 className={cx("reg-title")}>Join the challenger list</h3>
        <p className={cx("reg-sub")}>Coming next month: 4-day CTF event. Save your spot now.</p>
        <iframe
          data-tally-src={tallyUrl}
          loading="lazy"
          width="100%"
          height="590"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="KubeArmor AI-CTF"
          style={{ border: "none", display: "block" }}
        />
      </div>
    </div>
  );
};

const Hero = ({ tallyUrl }) => (
  <section className={cx("hero")} id="overview">
    <div className={cx("hero-grid-bg")} />
    <div className={cx("shell", "hero-inner")}>
      <div>
        <div className={cx("eyebrow")}>
          <span className={cx("dot")} /> Coming soon next month | 4-day CTF event
        </div>
        <h1 className={cx("hero-title")}>
          Break AI attack paths. <span className={cx("hero-mark")}>Defend with clarity.</span>
        </h1>
        <p className={cx("hero-sub")}>
          Three tracks and eighteen flags, live in a 4-day event next month.
        </p>

        <div className={cx("proof-strip")}>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.message />
            </div>
            <div>
              <div className={cx("proof-title")}>18 flags across 3 tracks</div>
              <div className={cx("proof-copy")}>Prompt Injection, Agent Hijack, and Hidden API.</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.browser />
            </div>
            <div>
              <div className={cx("proof-title")}>4-day event window</div>
              <div className={cx("proof-copy")}>Planned for next month.</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.medal />
            </div>
            <div>
              <div className={cx("proof-title")}>Sandbox platform: ctf.kubearmor.io</div>
              <div className={cx("proof-copy")}>Work in progress, launch aligned with event kickoff.</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.check />
            </div>
            <div>
              <div className={cx("proof-title")}>Flag submission: kubearmor.ctfd.io</div>
              <div className={cx("proof-copy")}>Work in progress, scores and ranking will be handled there.</div>
            </div>
          </div>
        </div>
      </div>

      <RegForm tallyUrl={tallyUrl} />
    </div>
  </section>
);

const eventFlowSteps = [
  {
    id: "01",
    title: "Save your spot",
    copy: "Submit your interest form now and get notified when the event opens next month.",
    icon: <Ic.users />,
  },
  {
    id: "02",
    title: "Join CTF platform",
    copy: "Use ctf.kubearmor.io to enter the challenge sandbox. This platform is work in progress.",
    icon: <Ic.browser />,
  },
  {
    id: "03",
    title: "Solve and submit flags",
    copy: "Solve in ctf.kubearmor.io, then submit in kubearmor.ctfd.io. Both are currently work in progress.",
    icon: <Ic.flag />,
  },
  {
    id: "04",
    title: "Rank and claim rewards",
    copy: "Final leaderboard positions unlock rewards and swag after eligibility checks.",
    icon: <Ic.medal />,
  },
];

const EventFlow = () => (
  <section className={cx("event-flow")} id="event-flow">
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}>4-day event flow</div>
        <h2>
          Clear path to <span className={cx("tone")}>play and submit.</span>
        </h2>
        <p>
          Coming soon next month. Challenges run in ctf.kubearmor.io and submissions run in
          kubearmor.ctfd.io, both platforms are currently work in progress.
        </p>
      </div>

      <div className={cx("platform-split")}>
        <article className={cx("platform-card", "platform-ctf")}>
          <span className={cx("platform-chip")}>CTF platform</span>
          <h3>ctf.kubearmor.io</h3>
          <p>Challenge sandbox and exploration surface (work in progress).</p>
        </article>
        <article className={cx("platform-card", "platform-submit")}>
          <span className={cx("platform-chip")}>Flag submission platform</span>
          <h3>kubearmor.ctfd.io</h3>
          <p>Flag submission, scoring, and leaderboard surface (work in progress).</p>
        </article>
      </div>

      <div className={cx("event-step-grid")}>
        {eventFlowSteps.map((step) => (
          <article className={cx("event-step-card")} key={step.id}>
            <div className={cx("event-step-top")}>
              <span className={cx("event-step-id")}>{step.id}</span>
              <span className={cx("event-step-ic")}>{step.icon}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const trackData = [
  {
    cls: "",
    num: "01",
    icon: <Ic.message />,
    name: "Prompt Injection",
    desc: "Override system prompts, drift personas, and recover leaked secrets.",
    posterTitle: (
      <>
        Prompt <span className={cx("accent")}>Injection</span>
      </>
    ),
    posterSub: "Adversarial chat, indirect inputs",
    challenges: [
      "System Override",
      "Persona Drift",
      "Memory Drift",
      "Indirect Injection",
      "Tool Confusion",
    ],
  },
  {
    cls: "",
    num: "02",
    icon: <Ic.route />,
    name: "Agent Hijack",
    desc: "Poison search, reroute tools, and bypass approval checks.",
    posterTitle: (
      <>
        Agent <span className={cx("accent")}>Hijack</span>
      </>
    ),
    posterSub: "Tool calls, multi-step coercion",
    challenges: [
      "Tool Roulette",
      "Search Poison",
      "Approval Skip",
      "Plan Rewrite",
      "Memory Corruption",
    ],
  },
  {
    cls: "",
    num: "03",
    icon: <Ic.key />,
    name: "Hidden API & Guardrail Bypass",
    desc: "Inspect browser traffic to find hidden endpoints and flip safety modes.",
    posterTitle: (
      <>
        Hidden <span className={cx("accent")}>API</span>
      </>
    ),
    posterSub: "Shadow endpoints, safety toggles",
    challenges: [
      "Debug Echo",
      "Safety Mode Tamper",
      "Transcript Leak",
      "Header Smuggle",
      "Rate-Limit Slip",
    ],
  },
];

const Tracks = () => (
  <section className={cx("tracks-bg")} id="tracks">
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}>Three tracks</div>
        <h2>
          Pick one. Or <span className={cx("tone")}>play all three.</span>
        </h2>
        <p>Five challenges plus a bonus completion flag in each track. 1,000 points apiece.</p>
      </div>
      <div className={cx("tracks-grid")}>
        {trackData.map((track) => (
          <div className={cx("track-card", track.cls)} key={track.num}>
            <div className={cx("track-poster")}>
              <div className={cx("poster-grid")} />
              <div className={cx("poster-glow")} />
              <span className={cx("poster-tag")}>
                <span className={cx("dot")} /> TRACK {track.num}
              </span>
              <span className={cx("poster-icon")}>{track.icon}</span>
              <div className={cx("poster-title")}>{track.posterTitle}</div>
              <div className={cx("poster-sub")}>{track.posterSub}</div>
            </div>
            <div className={cx("track-body")}>
              <h3>{track.name}</h3>
              <p>{track.desc}</p>
              <ul className={cx("track-challenges")}>
                {track.challenges.map((challenge, index) => (
                  <li key={challenge}>
                    <span className={cx("num")}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={cx("name")}>{challenge}</span>
                  </li>
                ))}
                <li className={cx("bonus")}>
                  <span className={cx("num")}>
                    <Ic.flag />
                  </span>
                  <span className={cx("name")}>Bonus completion flag</span>
                </li>
              </ul>
              <div className={cx("track-foot")}>
                <span className={cx("track-pts")}>1,000 pts</span>
                <span className={cx("track-count")}>6 flags</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const rewardTiers = [
  {
    key: "tier-1",
    className: "tier-highlight",
    rank: "Top 3",
    title: "$100 Amazon + premium swag",
    value: "$140-$160 value each",
    icon: <Ic.trophy />,
    image: "/img/ctf/rewards/reward-top3.svg",
    imageAlt: "Reward placeholder card for top three winners",
    details: [
      "$100 Amazon gift card",
      "One premium swag item (hoodie or T-shirt)",
      "Stickers + notebook or bottle",
    ],
  },
  {
    key: "tier-2",
    className: "",
    rank: "Ranks 4-8",
    title: "$30 Amazon gift card",
    value: "$150 total allocation",
    icon: <Ic.medal />,
    image: "/img/ctf/rewards/reward-rank4-8.svg",
    imageAlt: "Reward placeholder card for ranks four through eight",
    details: [
      "$30 Amazon gift card each",
      "Priority certificate delivery",
      "Included in post-event shoutout",
    ],
  },
  {
    key: "tier-3",
    className: "",
    rank: "All contestants",
    title: "Participation certificate",
    value: "Digital, verifiable certificate",
    icon: <Ic.check />,
    image: "/img/ctf/rewards/reward-all.svg",
    imageAlt: "Reward placeholder card for all contestants",
    details: [
      "Name, date, completion note",
      "Event title and organizer signature",
      "Shared after challenge window closes",
    ],
  },
];

const eligibilityRules = [
  {
    text: "Participated in the CTF",
    icon: <Ic.users />,
  },
  {
    text: "Ranked on the leaderboard",
    icon: <Ic.medal />,
  },
  {
    text: "Starred the KubeArmor GitHub repository",
    icon: <Ic.repo />,
  },
  {
    text: "Shared feedback in CNCF Slack #kubearmor or on LinkedIn/Twitter with #KubeArmorCTF tagging @kubearmor",
    icon: <Ic.share />,
  },
];

const Rewards = () => (
  <section className={cx("rewards")} id="rewards">
    <div className={cx("rw-grid-bg")} />
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}><Ic.spark /> Rewards</div>
        <h2>
          Rewards with clear terms.
        </h2>
        <p>
          Rank-based rewards with explicit rules, plus certificates for all contestants.
        </p>
      </div>

      <div className={cx("tier-grid")}>
        {rewardTiers.map((tier) => (
          <article className={cx("tier-card", tier.className)} key={tier.key}>
            <div className={cx("tier-media")}>
              <img src={tier.image} alt={tier.imageAlt} loading="lazy" />
            </div>
            <div className={cx("tier-icon")}>{tier.icon}</div>
            <p className={cx("tier-rank")}>{tier.rank}</p>
            <h3>{tier.title}</h3>
            <p className={cx("tier-value")}>{tier.value}</p>
            <ul>
              {tier.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={cx("eligibility-wrap")}>
        <div className={cx("eligibility-head")}>Unlock checklist (all four required)</div>
        <div className={cx("eligibility-grid")}>
          {eligibilityRules.map((rule) => (
            <article className={cx("eligibility-card")} key={rule.text}>
              <span className={cx("eligibility-check")}>
                <Ic.check />
              </span>
              <h4>{rule.text}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const items = [
    {
      q: "Where do I register?",
      a: "Use the lead form on this page. The event is coming next month and runs for 4 days.",
    },
    {
      q: "Do I need Kubernetes or local tools?",
      a: "No. Everything runs in browser, no kubeconfig, kubectl, or local cluster setup.",
    },
    {
      q: "Can I play all three tracks?",
      a: "Yes. Play one track or all three, total points across tracks are 3,000.",
    },
    {
      q: "What are the reward eligibility requirements?",
      a: "You must complete all four checklist items: participate in the event, rank on leaderboard, star the KubeArmor GitHub repository, and share your experience in CNCF Slack #kubearmor or on LinkedIn/Twitter with #KubeArmorCTF tagging @kubearmor.",
    },
    {
      q: "Who receives certificates and what is included?",
      a: "Every contestant receives a participation certificate including contestant name, event name (KubeArmor AI CTF), date, a completion note, and organizer signature.",
    },
    {
      q: "How do I submit flags?",
      a: "Each challenge yields a FLAG string. Submit flags at kubearmor.ctfd.io, which is currently work in progress.",
    },
    {
      q: "Which platforms are used for event flow?",
      a: "Challenges run on ctf.kubearmor.io and flag submission runs on kubearmor.ctfd.io. Both platforms are currently work in progress and will be active for next month's 4-day event.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={cx("faq")} id="faq">
      <div className={cx("shell")}>
        <div className={cx("section-head")}>
          <div className={cx("kicker")}>FAQ</div>
          <h2>Quick answers.</h2>
        </div>

        <div className={cx("faq-list")}>
          {items.map((item, index) => (
            <div key={item.q} className={cx("faq-item", openIndex === index && "open")}>
              <button
                className={cx("faq-q")}
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.q}</span>
                <span className={cx("plus")}>+</span>
              </button>
              <div className={cx("faq-a")}>
                <div className={cx("faq-a-inner")}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function CTFPage() {
  useEffect(() => {
    const isResizeObserverNoise = (message) =>
      typeof message === "string" &&
      message.includes("ResizeObserver loop completed with undelivered notifications");

    const handleWindowError = (event) => {
      const message = event?.message || event?.error?.message;
      if (!isResizeObserverNoise(message)) {
        return;
      }

      // Prevent webpack dev overlay from surfacing this known browser warning as a hard error.
      event.stopImmediatePropagation?.();
      event.preventDefault?.();
    };

    const handleUnhandledRejection = (event) => {
      const reasonMessage =
        typeof event?.reason === "string" ? event.reason : event?.reason?.message;
      if (!isResizeObserverNoise(reasonMessage)) {
        return;
      }

      event.preventDefault?.();
    };

    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const customFields = siteConfig.customFields || {};
  const tallyUrlFromConfig =
    typeof customFields.ctfLeadTallyUrl === "string" ? customFields.ctfLeadTallyUrl.trim() : "";
  const tallyUrl =
    tallyUrlFromConfig ||
    "https://tally.so/embed/ob0WJx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  return (
    <Layout
      title="KubeArmor AI Security CTF"
      description="Browser-first CTF landing page for KubeArmor AI security challenges."
      noNavbar
      noFooter
    >
      <div className={styles.ctfPage}>
        <Hero tallyUrl={tallyUrl} />
        <EventFlow />
        <Tracks />
        <Rewards />
        <FAQ />
      </div>
    </Layout>
  );
}
