import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const Nav = () => {
  const data = useStaticQuery(
    graphql`
      query NavQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  const [navVisible, setNavVisible] = useState(false)
  let menuIcon

  if (!navVisible) {
    menuIcon = (
      <svg
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )
  } else {
    menuIcon = (
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )
  }

  const props = useSpring({
    config: {
      tension: 500,
      mass: 1.2,
    },
    to: {
      height: navVisible ? "350px" : "0px",
      opacity: navVisible ? 1 : 0,
      display: navVisible ? "flex" : "none",
    },
  })

  const getLinks = (data, mobile = false) => {
    return data.site.siteMetadata.menuLinks.map(link => {
      let clist

      if (mobile) {
        clist =
          "px-3 text-center rounded-md font-bold text-xl py-2 mx-1 text-ysnow hover:text-secondary hover:bg-ysnow"
      } else {
        clist =
          "px-3 rounded-md font-bold text-sm py-2 mx-1 text-ysnow hover:text-secondary hover:bg-ysnow"
      }

      return (
        <Link className={clist} to={link.link}>
          {link.name}
        </Link>
      )
    })
  }

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center w-full h-16 justify-between">
          <div class="flex w-full  justify-between items-center">
            <span class="flex-shrink-0 font-serif font-black text-xl text-white hover:text-secondary">
              <Link to="/">Yorgos Bos</Link>
            </span>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-3">
                {getLinks(data)}
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              class="bg-ysnow inline-flex items-center justify-center p-2 rounded-md hover:text-ysnow hover:bg-secondary"
              onClick={() => setNavVisible(!navVisible)}
            >
              <span class="sr-only">Open main menu</span>
              {menuIcon}
            </button>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}

      <animated.div style={props} class="md:hidden flex">
        <div class="px-2 pt-2 pb-3 sm:px-3 m-auto space-y-6 flex flex-col">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {getLinks(data, true)}
        </div>
      </animated.div>
    </nav>
  )
}

export default Nav
