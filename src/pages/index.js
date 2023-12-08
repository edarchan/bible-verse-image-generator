import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import LandingPage from '../components/LandingPage';
import DropzoneComponent from '../components/dropzone';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <LandingPage />
      <DropzoneComponent />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>

export default IndexPage;
