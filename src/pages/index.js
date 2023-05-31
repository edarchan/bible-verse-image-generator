import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Dropzone from 'dropzone'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my WIP Bible Verse Image Generator. This has been built with Gatsby.</p>
      {/* <Dropzone>

      </Dropzone> */}
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage