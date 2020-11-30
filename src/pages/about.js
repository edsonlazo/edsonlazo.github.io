import React from "react"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Jobs from "../components/jobs"

const PageHeader = styled.h1`
  display: inline-block;
`
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: justify;
  @media (max-width: 420px) {
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;
  }
`
const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
  margin-left: 20px;
  @media (max-width: 420px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`
const AboutText = styled.p`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
  margin-left: 20px;
  @media (max-width: 420px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`

const BounceOut = keyframes`
 0% {
    box-shadow: 0 0 0 4px #3393;
    opacity: 1;
  }
  25% {
    box-shadow: 0 0 0 1px #0070F0;
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 0 7px #0070F0;
    opacity: 1;
  }
  75% {
    box-shadow: 0 0 0 4px #0070F0;
    opacity: 1;
  }
  100% {
    box-shadow: 0 0 0 5px #0070F0;
    opacity: 1;
  }
`
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  flex: 1;
  align-items: center;
`
const Avatar = styled.div`
  background-color: #0070f0;
  box-shadow: 0 0 0 5px #0070f0;
  -webkit-box-shadow: 0 0 0 5px #0070f0;
  -moz-box-shadow: 0 0 0 5px #3393;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`
const AvatarImage = styled(Img)`
  border-radius: 50%;
  height: 200px;
  width: 200px;
`

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query avatarImageQuery {
          site {
            siteMetadata {
              title
            }
          }
          avatarimage: file(relativePath: { eq: "avatar.jpg" }) {
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
            <SEO title="About" path="/about" />
            <div
              css={css`
                margin: 0 auto;
                max-width: 860px;
                padding: 1.45rem 1.0875rem;
              `}
            >
              <PageHeader>About</PageHeader>
              <AboutWrapper>
                <AvatarWrapper>
                  <Avatar
                    css={css`
                      &:hover {
                        animation: ${BounceOut} 0.4s linear;
                      }
                    `}
                  >
                    <AvatarImage
                      fluid={data.avatarimage.childImageSharp.fluid}
                    ></AvatarImage>
                  </Avatar>
                </AvatarWrapper>
                <AboutTextWrapper>
                  <AboutText>
                    Hey! I'm Edson and I love to build software products!
                  </AboutText>
                  <AboutText>
                    I live in Bolivia and have been working as a software
                    engineer since 2016. I've worked in different projects
                    ranging from simple commercial websites to ERP systems.
                  </AboutText>
                  <AboutText>
                    I decided to create this site so I can share my passion
                    about software engineering and the things that I've been
                    learning. I also wanted to polish my writing skills, since
                    english is not my first language. <br />
                  </AboutText>
                  <AboutText>
                    Right now I'm working as a software team lead in Multipago
                    where we help businesses grow their earnings by allowing
                    them to accept online payments.
                  </AboutText>
                  <AboutText>
                    If you want to talk don't hesitate to shoot me an email at:{" "}
                    <a
                      className="inline-link"
                      href="mailto:edsonlazos@gmail.com"
                      target="_blank"
                    >
                      edsonlazos@gmail.com
                    </a>
                  </AboutText>
                  <AboutText></AboutText>
                </AboutTextWrapper>
              </AboutWrapper>
            </div>
            <div
              css={css`
                margin: 0 auto;
                max-width: 860px;
                padding: 1.45rem 1.0875rem;
              `}
            >
              <Jobs></Jobs>
            </div>

            <div
              css={css`
                margin: 0 auto;
                max-width: 860px;
                padding: 1.45rem 1.0875rem;
              `}
            ></div>
          </Layout>
        </>
      )}
    />
  )
}

export default About
