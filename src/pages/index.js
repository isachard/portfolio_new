import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";
import Loader from "../components/loader"

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Isachard Rodriguez" />
    <Loader><div class="container">
        <div class="📦"></div>
        <div class="📦"></div>
        <div class="📦"></div>
        <div class="📦"></div>
        <div class="📦"></div>
    </div> </Loader>
    <Section id="about" title="About Me">
      <p>
      I'm always looking for more opportunities to challenge myself, 
      network with peers, and become involved in the community.
      </p>
      <p>
      Feel free to reach out to me by connecting with me or shooting an email.
       I'd love to chat about security science, cryptocurrencies or anything else!
      </p>
    </Section>
    
    <Section id="experience" title="Experience">
      <Link
        title="Ambyint"
        link="https://ambyint.com"
        desc="Full-Stack Developer, September 2018 - Present"
      />
      <Link
        title="Bank of Canada"
        link="https://bankofcanada.ca"
        desc="Full-Stack Developer, January 2018 - September 2018"
      />
      <Link
        title="Bank of Canada"
        link="https://bankofcanada.ca"
        desc="Full-Stack Developer (Co-op), May 2015 - August 2017"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Pivalink"
        link="https://pivalink.com"
        desc="Tool to create microlanding pages that can be easily updated and customized to fit any brand"
      />
      <Link
        title="Coursefacts"
        link="https://coursefacts.com"
        desc="A platform where students can read and write university / college course reviews anonymously"
      />
      <Link
        title="Dev Blog"
        link="https://github.com/RyanFitzgerald/devblog"
        desc="A open source and minimal personal blog template for developers built with Gatsby and React"
      />
      <Link
        title="Dev Portfolio"
        link="https://github.com/RyanFitzgerald/devportfolio"
        desc="An open source and customizable single-page personal portfolio template for developers"
      />
      <Link
        title="Day Counter"
        link="https://chrome.google.com/webstore/detail/day-counter-new-tab-page/popaiegponeiefbiddhmaphpbdjoegff?hl=en"
        desc="Chrome extension to track days until or since life events with over 5k active users"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), Python, React, Node.js, Express.js, Ruby on Rails, PHP"
      />
      <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
      <Link
        title="Other"
        desc="Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum"
      />
    </Section>

  </Layout>
);

export default IndexPage;
