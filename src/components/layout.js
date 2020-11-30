/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import "gitalk/dist/gitalk.css"
import Header from "./header"
import "./layout2.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const GatsbyIcon = styled(Img)`
  top: 0.1rem;
  height: 1.2rem;
  width: 1.2rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        gatsbyicon: file(relativePath: { eq: "black-gatsby-icon.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <p>
              Built with
              {` `}
            </p>
            <GatsbyLink
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noreferrer"
            >
              <GatsbyIcon fluid={data.gatsbyicon.childImageSharp.fluid} />
            </GatsbyLink>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
