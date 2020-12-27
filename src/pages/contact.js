import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO />
      <div className="prose">
        <h1 class="">Contact Me!</h1>
        <form
          action="https://formspree.io/hekkie__12@outlook.com"
          method="post"
          novalidate
          class="needs-validation md:space-y-8 sm:space-y-4 max-w-3xl"
        >
          <div class="form-group">
            <label class="font-medium" for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="border rounded w-full px-2 py-1"
              required
              placeholder="Name"
            />
            <label class="font-medium" for="_replyto">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              class="border rounded w-full px-2 py-1"
              required
              placeholder="Email"
            />
            <input type="hidden" name="_subject" value="New submission!" />
          </div>
          <div class="form-group">
            <label class="font-medium" for="message">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              class="border rounded w-full px-2 py-1"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" class="bg-primary rounded px-4 py-2 text-ysnow">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default About
