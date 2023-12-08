import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import DropzoneComponent from '../components/dropzone';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Bible Verse Image Generator.</p> 
      <p>Work in progress...</p> 
      <hr style={dividerStyles} />
      <DropzoneComponent />
    </Layout>
  );
};

const dividerStyles = {
  margin: '20px 0',
  border: '1px solid #dddddd',
};

export const Head = () => <title>Home Page</title>

export default IndexPage;
