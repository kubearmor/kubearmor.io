import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";

import styles from "./index.module.css";
import HomepageArchitecture from "../components/HomepageArchitecture";
import HomepageInstallation from "../components/HomepageInstallation";
import HomepageUseCases from "../components/HomepageUseCases";
import HomepageMarketplaces from "../components/HomepageMarketplaces";
import HomepageExpansions from "../components/HomepageExpansions";
import HomepageVersionChangelog from "../components/HomepageVersionChangelog";
import HomepageBlogs from "../components/HomepageBlogs";
import HomepageVideos from "../components/HomepageVideos";
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageAdopters from "../components/HomepageAdopters";
import HomepageCommunity from "../components/HomepageCommunity";
import HomepageMembership from "../components/HomepageMembership";
import HomepageSupport from "../components/HomepageSupport";
import HomepageContributors from "../components/HomepageContributors";
import HomepageSandbox from "../components/HomepageSandbox";

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Runtime Security Enforcement `}
      description="Runtime Cloud Native Security Engine. Workload hardening and implementing least-permissive policies made easy. Leveraging eBPF and Linux Security Modules(LSM) for protecting workloads on Cloud,  Containers, IoT/Edge, and 5G networks."
    >
      <Head>
        <link
          rel="dns-prefetch"
          href="//t.visitorqueue.com"
          style={{ display: "none !important" }}
        />
        <script>
          {`
          function vqTrackId(){return '189b9b40-687b-463a-b3fe-b8466827688d';}
          (function(d, e) {
            var el = d.createElement(e);
            el.sa = function(an, av){this.setAttribute(an, av); return this;};
            el.sa('id', 'vq_tracking').sa('src', '//t.visitorqueue.com/p/tracking.min.js?id='+vqTrackId()).sa('async', 1).sa('data-id', vqTrackId());
            d.getElementsByTagName(e)[0].parentNode.appendChild(el);
          })(document, 'script');
        `}
        </script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://p.visitorqueue.com/styles/189b9b40-687b-463a-b3fe-b8466827688d.css"
          id="vq_flick_styles"
        />
        <script>
          {`
          function vqTrackPc(){return 1;}
        `}
        </script>
        <script>
          {`
          (function(d, e) {
            var el = d.createElement(e);
            el.sa = function(an, av){this.setAttribute(an, av); return this;};
            el.sa('id', 'vq_personalisation').sa('src', '//personalisation.visitorqueue.com/p/personalisation.min.js?id='+vqTrackId()).sa('async', 1).sa('data-id', vqTrackId());
            d.getElementsByTagName(e)[0].parentNode.appendChild(el);
          })(document, 'script');
        `}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageArchitecture />
        <HomepageFeatures />
        <HomepageInstallation />
        <HomepageUseCases />
        <HomepageMarketplaces />
        <HomepageVersionChangelog />
        <HomepageExpansions />
        <HomepageBlogs />
        <HomepageVideos />
        <HomepageTestimonials />
        <HomepageAdopters />
        <HomepageCommunity />
        <HomepageMembership />
        <HomepageContributors />
        <HomepageSandbox />
        <HomepageSupport />
      </main>
    </Layout>
  );
}
