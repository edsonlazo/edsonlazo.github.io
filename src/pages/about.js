import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageHeader = styled.h1`
  display: inline-block;
`

// const AboutText = styled.p``

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <div
        css={css`
          margin: 0 auto;
          max-width: 860px;
          padding: 1.45rem 1.0875rem;
        `}
      >
        <PageHeader>Page under construction</PageHeader>
      </div>
    </Layout>
  )
}

export default About
