import React, { useState } from "react";
import Layout from "@theme/Layout";
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
};

const RegForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    track: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (key) => (event) => {
    setData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!data.name.trim()) nextErrors.name = "Required";
    if (!data.email.trim()) {
      nextErrors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!data.org.trim()) nextErrors.org = "Required";
    if (!data.role) nextErrors.role = "Required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={cx("reg-card")} id="register">
        <div className={cx("reg-success")}>
          <div className={cx("ok-mark")}>
            <Ic.check />
          </div>
          <h3>You are in.</h3>
          <p>We have saved your seat. Finish in CTFd to get your team join code.</p>
          <a
            className={cx("btn", "btn-primary", "btn-block", "btn-lg")}
            href="https://ctfd.io"
            target="_blank"
            rel="noreferrer"
          >
            Continue to CTFd <span className={cx("arr")}><Ic.arrow /></span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={cx("reg-card")} id="register" onSubmit={submit} noValidate>
      <div className={cx("reg-body")}>
        <h3 className={cx("reg-title")}>Reserve your seat</h3>
        <p className={cx("reg-sub")}>
          Official scoring happens in CTFd. We will route you there next.
        </p>

        <div className={cx("form-grid")}>
          <div className={cx("field", "full")}>
            <label htmlFor="r-name">Full name</label>
            <input
              id="r-name"
              className={cx(errors.name && "invalid")}
              type="text"
              placeholder="Ada Lovelace"
              value={data.name}
              onChange={setField("name")}
            />
            {errors.name && <div className={cx("err")}>{errors.name}</div>}
          </div>

          <div className={cx("field", "full")}>
            <label htmlFor="r-email">Work email</label>
            <input
              id="r-email"
              className={cx(errors.email && "invalid")}
              type="email"
              placeholder="ada@company.com"
              value={data.email}
              onChange={setField("email")}
            />
            {errors.email && <div className={cx("err")}>{errors.email}</div>}
          </div>

          <div className={cx("field")}>
            <label htmlFor="r-org">Organization</label>
            <input
              id="r-org"
              className={cx(errors.org && "invalid")}
              type="text"
              placeholder="Company / school"
              value={data.org}
              onChange={setField("org")}
            />
            {errors.org && <div className={cx("err")}>{errors.org}</div>}
          </div>

          <div className={cx("field")}>
            <label htmlFor="r-role">Role</label>
            <select
              id="r-role"
              className={cx(errors.role && "invalid")}
              value={data.role}
              onChange={setField("role")}
            >
              <option value="">Select role</option>
              <option>AppSec / Security</option>
              <option>AI / ML Engineer</option>
              <option>Developer</option>
              <option>Student</option>
              <option>Other</option>
            </select>
            {errors.role && <div className={cx("err")}>{errors.role}</div>}
          </div>

          <div className={cx("field", "full")}>
            <label htmlFor="r-track">
              Track interest <span className={cx("opt")}>optional</span>
            </label>
            <select id="r-track" value={data.track} onChange={setField("track")}>
              <option value="">No preference</option>
              <option>Track 1 · Prompt Injection</option>
              <option>Track 2 · Agent Hijack</option>
              <option>Track 3 · Hidden API</option>
            </select>
          </div>
        </div>

        <div className={cx("reg-foot")}>
          <button className={cx("btn", "btn-primary", "btn-block", "btn-lg")} type="submit">
            Register in CTFd <span className={cx("arr")}><Ic.arrow /></span>
          </button>
        </div>
      </div>
    </form>
  );
};

const Hero = () => (
  <section className={cx("hero")} id="overview">
    <div className={cx("hero-grid-bg")} />
    <div className={cx("shell", "hero-inner")}>
      <div>
        <div className={cx("eyebrow")}>
          <span className={cx("dot")} /> Registration open
        </div>
        <h1 className={cx("hero-title")}>
          Hack the AI. <span className={cx("grad")}>From your browser.</span>
        </h1>
        <p className={cx("hero-sub")}>
          Three tracks. Eighteen flags. Solved entirely in your browser.
          <b> No setup, no kubeconfig, no cluster.</b>
        </p>
        <div className={cx("cta-row")}>
          <a className={cx("btn", "btn-primary", "btn-lg")} href="#register">
            Register in CTFd <span className={cx("arr")}><Ic.arrow /></span>
          </a>
          <a className={cx("btn", "btn-ghost", "btn-lg")} href="#tracks">
            View tracks
          </a>
        </div>

        <div className={cx("proof-strip")}>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-num")}>3</div>
            <div className={cx("proof-label")}>Tracks</div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-num")}>18</div>
            <div className={cx("proof-label")}>Flags</div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-num")}>3,000</div>
            <div className={cx("proof-label")}>Points</div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-num")}>0</div>
            <div className={cx("proof-label")}>Setup</div>
          </div>
        </div>
      </div>

      <RegForm />
    </div>
  </section>
);

const trackData = [
  {
    cls: "",
    num: "01",
    name: "Prompt Injection",
    desc: "Bend a chatbot to your will - override system prompts, drift personas, leak secrets.",
    posterTitle: (
      <>
        Prompt <span className={cx("accent")}>Injection</span>
      </>
    ),
    posterSub: "Adversarial chat - indirect inputs",
    challenges: [
      "System Override",
      "Persona Drift",
      "Memory Drift",
      "Indirect Injection",
      "Tool Confusion",
    ],
  },
  {
    cls: "t-green",
    num: "02",
    name: "Agent Hijack",
    desc: "Reroute autonomous agents - poison search, swap tools, slip past approval gates.",
    posterTitle: (
      <>
        Agent <span className={cx("accent")}>Hijack</span>
      </>
    ),
    posterSub: "Tool calls - multi-step coercion",
    challenges: [
      "Tool Roulette",
      "Search Poison",
      "Approval Skip",
      "Plan Rewrite",
      "Memory Corruption",
    ],
  },
  {
    cls: "t-amber",
    num: "03",
    name: "Hidden API & Guardrail Bypass",
    desc: "Use the browser as your inspector - find shadow endpoints and flip safety modes.",
    posterTitle: (
      <>
        Hidden <span className={cx("accent")}>API</span>
      </>
    ),
    posterSub: "Shadow endpoints - safety toggles",
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
          Pick one. Or <em>play all three.</em>
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
    className: "tier-one",
    rank: "Top 3",
    title: "$100 Amazon + premium swag",
    value: "$140-$160 value each",
    icon: <Ic.trophy />,
    details: [
      "$100 Amazon gift card",
      "One premium swag item (hoodie or T-shirt)",
      "Stickers + notebook or bottle",
    ],
  },
  {
    key: "tier-2",
    className: "tier-two",
    rank: "Ranks 4-8",
    title: "$30 Amazon gift card",
    value: "$150 total allocation",
    icon: <Ic.medal />,
    details: [
      "$30 Amazon gift card each",
      "Priority certificate delivery",
      "Included in post-event shoutout",
    ],
  },
  {
    key: "tier-3",
    className: "tier-three",
    rank: "All contestants",
    title: "Participation certificate",
    value: "Digital, verifiable certificate",
    icon: <Ic.check />,
    details: [
      "Name, date, completion note",
      "Event title and organizer signature",
      "Shared after challenge window closes",
    ],
  },
];

const swagPreview = [
  {
    name: "KubeArmor T-shirt",
    image: "https://placehold.co/640x420/e9f1ff/082c74?text=KubeArmor+T-Shirt",
  },
  {
    name: "KubeArmor Hoodie",
    image: "https://placehold.co/640x420/e7efff/082c74?text=KubeArmor+Hoodie",
  },
  {
    name: "Sticker + Notebook Pack",
    image: "https://placehold.co/640x420/ecf3ff/082c74?text=Sticker+%2B+Notebook+Pack",
  },
  {
    name: "Bottle + Cap Combo",
    image: "https://placehold.co/640x420/f0f5ff/082c74?text=Bottle+%2B+Cap+Combo",
  },
];

const Rewards = () => (
  <section className={cx("rewards")} id="rewards">
    <div className={cx("rw-grid-bg")} />
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}><Ic.spark /> Rewards</div>
        <h2>
          Tiered rewards. <em>Zero ambiguity.</em>
        </h2>
        <p>
          Total reward budget is $900 with fixed rank-based tiers. Swag details are visible up
          front so participants know what each placement unlocks.
        </p>
      </div>

      <div className={cx("tier-grid")}>
        {rewardTiers.map((tier) => (
          <article className={cx("tier-card", tier.className)} key={tier.key}>
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

      <div className={cx("swag-showcase")}>
        <div className={cx("swag-head")}>Swag preview (placeholder images)</div>
        <div className={cx("swag-grid")}>
          {swagPreview.map((item) => (
            <figure className={cx("swag-card")} key={item.name}>
              <img src={item.image} alt={`${item.name} placeholder preview`} loading="lazy" />
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={cx("rewards-grid")}>
        <div className={cx("rw-card", "rw-points")}>
          <div className={cx("label")}>
            <Ic.flag /> Reward eligibility
          </div>
          <h3>Unlock criteria (must meet all)</h3>
          <p>Reward claims require every condition below.</p>
          <div className={cx("rw-ladder")}>
            <div className={cx("rw-rung")}>
              <span className={cx("lbl")}>
                <span className={cx("ldot")} /> Participated in the CTF
              </span>
              <span className={cx("pts")}>Required</span>
            </div>
            <div className={cx("rw-rung")}>
              <span className={cx("lbl")}>
                <span className={cx("ldot")} /> Ranked on the leaderboard
              </span>
              <span className={cx("pts")}>Required</span>
            </div>
            <div className={cx("rw-rung")}>
              <span className={cx("lbl")}>
                <span className={cx("ldot")} /> Starred the KubeArmor GitHub repository
              </span>
              <span className={cx("pts")}>Required</span>
            </div>
            <div className={cx("rw-rung")}>
              <span className={cx("lbl")}>
                <span className={cx("ldot")} /> Shared feedback in CNCF Slack #kubearmor or on
                LinkedIn/Twitter with #KubeArmorCTF tagging @kubearmor
              </span>
              <span className={cx("pts")}>Required</span>
            </div>
          </div>
        </div>

        <div className={cx("rw-card", "rw-leader")}>
          <h3 className={cx("rw-title")}>
            <span className={cx("ico")}>
              <Ic.gift />
            </span>
            Budget allocation ($900 cap)
          </h3>
          <p>Suggested split from the published rewards plan.</p>
          <div className={cx("lb")}>
            <div className={cx("lb-row", "first")}>
              <span className={cx("rk")}>A</span>
              <span className={cx("nm")}>Top 3 winners</span>
              <span className={cx("pt")}>$420-$480</span>
            </div>
            <div className={cx("lb-row", "second")}>
              <span className={cx("rk")}>B</span>
              <span className={cx("nm")}>Next 5 winners</span>
              <span className={cx("pt")}>$150</span>
            </div>
            <div className={cx("lb-row", "third")}>
              <span className={cx("rk")}>C</span>
              <span className={cx("nm")}>Swag + shipping buffer</span>
              <span className={cx("pt")}>$210-$300</span>
            </div>
            <div className={cx("lb-row", "fourth")}>
              <span className={cx("rk")}>D</span>
              <span className={cx("nm")}>Certificates (digital)</span>
              <span className={cx("pt")}>Distribution cost only</span>
            </div>
          </div>
          <p className={cx("rw-note")}>
            Terms apply: reward eligibility is tied to participation, leaderboard rank, GitHub
            star, and community or social proof.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const How = () => {
  const lanes = [
    {
      surface: "CTFd",
      helper: "Identity + leaderboard surface",
      tone: "ctfd",
      steps: [
        { n: 1, title: "Register and join the event", desc: "Create your account and team." },
        { n: 6, title: "Submit each recovered flag", desc: "Validate flags and lock points." },
      ],
    },
    {
      surface: "Browser challenge app",
      helper: "Exploit and solve surface",
      tone: "app",
      steps: [
        { n: 2, title: "Launch challenge workspace", desc: "Everything runs in-browser." },
        { n: 3, title: "Pick a track", desc: "Prompt Injection, Agent Hijack, or Hidden API." },
        { n: 4, title: "Investigate and exploit", desc: "Use hints, logs, and UI clues." },
        { n: 5, title: "Recover the flag", desc: "Capture the exact flag string." },
      ],
    },
  ];

  return (
    <section className={cx("workflow")} id="how">
      <div className={cx("shell")}>
        <div className={cx("section-head", "workflow-head")}>
          <div className={cx("kicker")}>How it works</div>
          <h2>
            One mission. <em>Two clear surfaces.</em>
          </h2>
          <p>
            CTFd handles identity and scoring, while all challenge solving happens inside the
            browser app.
          </p>
        </div>

        <div className={cx("workflow-grid")}>
          {lanes.map((lane) => (
            <article className={cx("surface-card", lane.tone)} key={lane.surface}>
              <div className={cx("surface-top")}>
                <span className={cx("surface-chip")}>{lane.surface}</span>
                <p>{lane.helper}</p>
              </div>
              <div className={cx("surface-steps")}>
                {lane.steps.map((step) => (
                  <div className={cx("flow-step")} key={`${lane.surface}-${step.n}`}>
                    <div className={cx("flow-num")}>{step.n}</div>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={cx("workflow-note")}>
          Flow summary: start in CTFd, solve in browser app, then return to CTFd for scoring.
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const items = [
    {
      q: "Where do I register?",
      a: "In hosted CTFd. The form on this page captures your details and routes you there.",
    },
    {
      q: "Do I need Kubernetes or local tools?",
      a: "No. No kubeconfig, no kubectl, no cluster. Everything runs in your browser.",
    },
    {
      q: "Can I play all three tracks?",
      a: "Yes. Attempt one, two, or all three. The all-track total is 3,000 points.",
    },
    {
      q: "What are the reward eligibility requirements?",
      a: "To unlock rewards you must participate in the CTF, be ranked on the leaderboard, star the KubeArmor GitHub repository, and share your experience in CNCF Slack #kubearmor or on LinkedIn/Twitter with #KubeArmorCTF tagging @kubearmor.",
    },
    {
      q: "Who receives certificates and what is included?",
      a: "Every contestant receives a participation certificate including contestant name, event name (KubeArmor AI CTF), date, a completion note, and organizer signature.",
    },
    {
      q: "How do I submit flags?",
      a: "Each challenge yields a FLAG string. Paste it into CTFd to claim points.",
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
  return (
    <Layout
      title="KubeArmor AI Security CTF"
      description="Browser-first CTF landing page for KubeArmor AI security challenges."
      noNavbar
      noFooter
    >
      <div className={styles.ctfPage}>
        <Hero />
        <Tracks />
        <Rewards />
        <How />
        <FAQ />
      </div>
    </Layout>
  );
}
