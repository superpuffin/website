import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO />
      <div className="prose xl:prose-xl xl:max-w-5xl lg:prose-lg">
        <h1 class="">Contact Me!</h1>
        <form
          action="https://formspree.io/hekkie__12@outlook.com"
          method="post"
          novalidate
          class="md:space-y-8 sm:space-y-4"
        >
          <div class="form-group">
            <label class="font-medium">
              Name
              <input
                type="text"
                name="name"
                class="border rounded w-full px-2 py-1"
                required
                placeholder="Name"
              />
            </label>
            <label class="font-medium">
              Email
              <input
                type="email"
                name="_replyto"
                class="border rounded w-full px-2 py-1"
                required
                placeholder="Email"
              />
            </label>
            <input type="hidden" name="_subject" value="New submission!" />
          </div>
          <div class="form-group">
            <label class="font-medium">
              Message
              <textarea
                name="message"
                rows="6"
                class="border rounded w-full px-2 py-1"
                placeholder="Type your message here..."
                required
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            class="bg-primary rounded px-4 py-1.5 text-ysnow"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default About
