/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="app">
        <Header
          location={props.location}
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{props.children}</main>
        <footer>
          <div>All rights reserved - Byrne Audio</div>
          <div className="contact-icons">
            <a
              href="http://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/seanmfox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-lg" />
            </a>
            <a
              href="https://www.facebook.com/Byrne-Audio-1518750408258548/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-lg" />
            </a>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
