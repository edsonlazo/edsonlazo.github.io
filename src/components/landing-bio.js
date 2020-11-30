import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"
import { FaInstagram, FaSpotify, FaLinkedin, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 75vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: tanslateX(0);
  }
`

// const fadeInFromBottom = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: tanslateX(0);
//   }
// `

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            instagram
            spotify
            linkedin
            twitter
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <div
            css={css`
              animation: ${fadeInFromTop} 1.5s ease;
            `}
          >
            <NameHeader>{data.site.siteMetadata.title} </NameHeader>
            <Description>{data.site.siteMetadata.subtitle}</Description>
          </div>
          <div
            css={css`
              animation: ${fadeInFromTop} 1.5s ease;
              margin-top: 1.8rem;
              font-size: 1.2rem;
              display: flex;
              justify-content: space-evenly;
              flex-direction: row;
            `}
          >
            <a
              href={data.site.siteMetadata.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={data.site.siteMetadata.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a href="mailto:edsonlazos@gmail.com">
              <MdEmail />
            </a>
            <a
              href={data.site.siteMetadata.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href={data.site.siteMetadata.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <FaSpotify />
            </a>
          </div>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
