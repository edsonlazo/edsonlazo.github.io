import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import SEO from "../components/seo"
const PageHeader = styled.h1`
  display: inline-block;
`
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: justify;
`

const AboutText = styled.p`
  display: block;
  // flex-direction: column;
  // flex-basis: 100%;
  // flex: 3;
  margin-right: 20px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <div
      css={css`
        margin: 0 auto;
        max-width: 860px;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <PageHeader>Podcast - Manqueando IRL</PageHeader>
      <AboutWrapper>
        <AboutText>
          I started this podcast with one of my best friends{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/crizzgarcia19/"
            className=" company inline-link"
          >
            @Christian Garcia
          </a>
          . It is only available in Spanish. In this show we talk about things
          in which we are not experts. We do not intend to change the world or
          generate doubts. these are conversations between us. If you think like
          us, Great! If your opinions are different, even better!
        </AboutText>
        <AboutText>
          This podcast is available in{" "}
          <a
            target="_blank"
            href="https://open.spotify.com/show/6Hkj1T4pHxgu7x3ZtyRiFH?si=p0dz-W96QwC6rGDueP8gUg"
            className=" company inline-link"
          >
            Spotify
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCmDC6E3_zPh640uAYK--7HA"
            className=" company inline-link"
          >
            Youtube
          </a>{" "}
        </AboutText>
        <iframe
          src="https://open.spotify.com/embed-podcast/show/6Hkj1T4pHxgu7x3ZtyRiFH"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </AboutWrapper>
    </div>
  </Layout>
)

export default IndexPage
