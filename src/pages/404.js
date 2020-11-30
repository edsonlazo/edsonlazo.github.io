import styled from "@emotion/styled"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
`
const NotFounImageDiv = styled.div``
const NotFoundImage = styled(Img)`
  width: 30%;
`

const NotFoundPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query notFoundImageQuery {
          site {
            siteMetadata {
              title
            }
          }
          notfoundimage: file(relativePath: { eq: "abstract-232.png" }) {
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
          <Layout>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <NotFoundWrapper>
              <NotFoundImage
                fluid={data.notfoundimage.childImageSharp.fluid}
              ></NotFoundImage>
            </NotFoundWrapper>
            <p style={{ textAlign: "center" }}>There's nothing here 😕 </p>
          </Layout>
        </>
      )}
    />
  )
}

export default NotFoundPage
