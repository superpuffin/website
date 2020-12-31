import React from "react"
// import { Link } from "gatsby"
import Nav from "../components/nav"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="">
        {/* {header} */}
        <Nav className="bg-primary" />
        <svg
          className="fill-current text-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </header>

      <main className="max-w-3xl xl:max-w-4xl px-5 mx-auto my-5 md:my-4 lg:my-2 xl:my-0">
        {children}
      </main>

      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 290"
          className="fill-current text-primary-dark"
        >
          <path d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,250.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className="p-4 w-full mx-auto lg:pt-6 xl:pt-8 bg-primary-dark">
          <div className="max-w-3xl xl:max-w-4xl mx-auto">
            <p className="mx-auto text-ysnow">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
