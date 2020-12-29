import React from "react"
// import { Link } from "gatsby"
import Nav from "../components/nav"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="">
        {/* {header} */}
        <Nav className="bg-primary" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00A7E1"
            fill-opacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </header>

      <main className="max-w-3xl xl:max-w-4xl px-5 mx-auto my-5 md:my-4 lg:my-2 xl:my-0">
        {children}
      </main>

      <footer className="p-4 w-full mx-auto lg:pt-6 xl:pt-8">
        <div className="max-w-3xl xl:max-w-4xl mx-auto">
          <p className="mx-auto">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
