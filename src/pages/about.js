import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO />
      <div className="prose">
        <h1 id="about-me">About me</h1>
        <p>
          Hi! My name is Yorgos Bos, I am a biology student at Utrecht
          University. I'm particularly interested in toxicology, cell biology
          and to a lesser extend microbiology. In my spare time, I work for a
          student deployment agency and an take active part in my students'
          union. At my students' union, I was at the head of the cooking
          committee and the cultural committee.
        </p>
        <h2 id="my-interests">My interests</h2>
        <p>
          Since I was a child I have had an interest in computers and
          programming. So in my free time I try to explore this. To this purpose
          I have learnt to program in the past few years. A key part in this was
          having to learn R for my studies. This has led me to pursue coding
          further, taking a Programming with Python{" "}
          <a href="https://cursusplanner.uu.nl/course/BETA-B1PYT/2020/3">
            course
          </a>{" "}
          I also started tinkering with DIY boards like the Wemos D1 mini and
          Raspberry Pi. This has yielded me a greater understanding of how
          appliances work. Working with the Raspberry Pi has also given me
          insight in working with Linux computers.
        </p>
        <h2 id="recent-projects">Recent projects</h2>
        <p>
          I've started some web development, for instance building this site.
          Whilst doing this I've learned a lot. For instance using git and
          jekyll. Also, I've started using Sass with this project.
        </p>
      </div>
    </Layout>
  )
}

export default About
