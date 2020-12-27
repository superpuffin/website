import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  const toggleNav = () => {
    return true
  }

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="flex-shrink-0 font-serif font-black text-xl text-white hover:text-secondary">
              <Link to="/">Yorgos Bos</Link>
            </span>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-3">
                {data.site.siteMetadata.menuLinks.map(link => {
                  return (
                    <Link
                      className="px-3 font-medium rounded-md font-medium text-sm py-2 mx-1 text-ysnow hover:text-secondary hover:bg-ysnow"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              class="bg-ysnow inline-flex items-center justify-center p-2 rounded-md hover:text-ysnow hover:bg-secondary"
              onClick={toggleNav(this)}
            >
              <span class="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
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
              {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg
                class="hidden h-6 w-6"
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
            </button>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {data.site.siteMetadata.menuLinks.map(link => {
            return (
              <Link
                className="px-3 rounded-md font-medium text-sm py-2 mx-1 hover:bg-ysnow"
                to={link.link}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Nav
