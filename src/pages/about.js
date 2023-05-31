import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, Edar, which I built with Gatsby.</p>
      <StaticImage
        alt="Edar (AI generated photo) posing and looking stoically away"
        src="../images/edar-ai.jpeg"
      />
    </Layout>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Trinity" />
    </>
  )

export default AboutPage