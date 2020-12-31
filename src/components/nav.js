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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="block h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )
  } else {
    menuIcon = (
      <svg
        class="h-8 w-8"
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
      tension: 420,
      mass: 1.65,
      friction: 25,
    },
    from: { display: "none", height: "0px", opacity: 0 },
    to: async (next, cancel) => {
      await next({ display: "flex" })
      await next({
        height: navVisible ? "450px" : "0px",
        opacity: navVisible ? 1 : 0,
      })
      await next({ display: navVisible ? "flex" : "none" })
    },
  })

  const getLinks = data.site.siteMetadata.menuLinks.map(link => {
    return (
      <Link
        className={
          "px-3 sm:text-center rounded-md font-bold sm:text-xl md:text-sm py-2 mx-1 text-ysnow hover:text-secondary hover:bg-ysnow"
        }
        to={link.link}
      >
        {link.name}
      </Link>
    )
  })

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center w-full h-16 justify-between">
          <div class="flex w-full  justify-between items-center">
            <span class="flex-shrink-0 font-serif font-black text-xl text-white hover:text-secondary">
              <Link to="/">
                <svg
                  width="56"
                  height="56"
                  version="1.1"
                  fill="currentColor"
                  viewBox="0 0 135.47 135.47"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="matrix(1.0204 0 0 1.0204 -1.3831 -1.3831)"
                    aria-label="Y"
                  >
                    <path d="m69.104 31.301q-2.0035-0.73814-10.334 4.1125-8.2249 4.8506-16.239 9.5958-9.174 5.3778-11.494 5.3778-1.1599 0-1.1599-0.94903 0-3.1634 1.5817-7.6977 1.5817-4.6397 3.5852-8.1195 0.52724-0.94903 7.065-5.167 8.1195-5.2724 15.923-8.5413 10.756-4.5343 18.559-4.5343 1.1599 0 2.0035 0t2.5308 0.42179q1.7926 0.31634 2.4253 2.3199 0.31634 1.0545 0.31634 2.4253 0 1.8981-0.52724 3.2689-2.5308 7.065-10.967 18.77-6.7487 9.0685-13.286 17.926-6.5378 8.8576-5.5887 10.861 0.42179 0.84358 1.5817 0.84358 3.6907 0 14.341-9.8067 4.6397-4.2179 18.981-18.77 10.439-10.545 12.443-11.388 1.0545-0.42179 2.8471 2.0035 1.8981 2.4253 1.8981 4.7452 0 1.4763-8.4358 14.235-11.177 16.977-15.185 23.515-7.9086 12.97-6.7487 14.763 3.4798-1.7926 6.9596-3.5852 7.9086-4.6397 12.337-4.6397 0.94903 0 1.4763 0.10545-0.73814 1.5817-1.3708 3.1634-9.8067 8.6467-17.399 15.606-7.5923 7.065-14.974 14.13-4.4288 3.7961-6.5378 3.7961-0.63269 0-1.1599-0.31634-1.8981-1.1599-1.8981-4.4288 0-6.4323 8.5413-21.3 4.2179-7.3814 15.079-23.409 2.6362-4.6397 5.3778-9.3849-3.3743 2.7416-6.6432 5.4833-10.228 9.8067-16.977 15.185-10.967 8.7522-15.923 8.7522-1.8981 0-3.058-1.2654-1.7926-2.109-1.7926-5.167 0-5.4833 5.6942-14.552 1.5817-2.5308 10.545-14.763 5.0615-5.6942 8.8576-10.334 7.4868-9.0685 7.4868-12.127 0-0.84358-0.73814-1.1599z" />
                  </g>
                </svg>
              </Link>
            </span>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-3">{getLinks}</div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              className="text-ysnow hover:text-secondary inline-flex items-center justify-center p-1 focus:outline-none rounded focus:ring focus:ring-1 focus:ring-white"
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
          {getLinks}
        </div>
      </animated.div>
    </nav>
  )
}

export default Nav
