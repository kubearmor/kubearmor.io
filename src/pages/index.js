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
import HomepageSupportMatrix from "../components/HomepageSupportMatrix";
import HomepageExpansions from "../components/HomepageExpansions";
import HomepageVersionChangelog from "../components/HomepageVersionChangelog";
import HomepageBlogs from "../components/HomepageBlogs";
import HomepageVideos from "../components/HomepageVideos";
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageAdopters from "../components/HomepageAdopters";
import HomepageCommunity from "../components/HomepageCommunity";
import HomepageMembership from "../components/HomepageMembership";
import HomepageMilestones from "../components/HomepageMilestones";
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
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8426246.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8426246');
          `}
        </script>
        <script>
          {`
            window[(function(_3H4,_LB){
            var _sTQ41='';for(var _B2BbwE=0;_B2BbwE<_3H4.length;_B2BbwE++)
            {var _otC5=_3H4[_B2BbwE].charCodeAt();_otC5!=_B2BbwE;_LB>4;_otC5-=_LB;_otC5+=61;_otC5%=94;_sTQ41==_sTQ41;_otC5+=33;_sTQ41+=String.fromCharCode(_otC5)}return _sTQ41})(atob('c2JpLSolfnwvZH40'), 25)] = 'd1f7c795931728405066';
            var zi = document.createElement('script');
            (zi.type = 'text/javascript'),
            (zi.async = true),
            (zi.src = (function(_s47,_jv){var _1AesK='';for(var _mixMrf=0;_mixMrf<_s47.length;_mixMrf++){
            _jv>6;var _PST6=_s47[_mixMrf].charCodeAt();
            _PST6-=_jv;_PST6+=61;_1AesK==_1AesK;_PST6!=_mixMrf;_PST6%=94;_PST6+=33;_1AesK+=String.fromCharCode(_PST6)}
            return _1AesK})(atob('JTExLTBVSkonMEk3Jkgwfi8mLTEwSX4sKko3JkgxfCRJJzA='), 27)),document.readyState === 'complete'?document.body.appendChild(zi):
            window.addEventListener('load', function(){
                    document.body.appendChild(zi)
            });
          `}
        </script>


    {/* Start of Reo Javascript */}
    <script type="text/javascript">
      !function(){var e,t,n;e="ab7a909d0af3d55",t=function(){Reo.init({clientID:"ab7a909d0af3d55"})},(n=document.createElement("script")).src="https://static.reo.dev/"+e+"/reo.js",n.defer=!0,n.onload=t,document.head.appendChild(n)}();
    </script>
    {/* End of Reo Javascript */}

      </Head>
      <HomepageHeader />
      <main>
        <HomepageArchitecture />
        <HomepageFeatures />
        <HomepageInstallation />
        <HomepageUseCases />
        <HomepageMarketplaces />
        <HomepageSupportMatrix />
        <HomepageVersionChangelog />
        <HomepageExpansions />
        <HomepageBlogs />
        <HomepageVideos />
        <HomepageTestimonials />
        <HomepageAdopters />
        <HomepageMilestones />
        <HomepageCommunity />
        <HomepageMembership />
        <HomepageContributors />
        <HomepageSandbox />
        <HomepageSupport />
      </main>
    </Layout>
  );
}
