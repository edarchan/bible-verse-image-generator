import React from 'react';
import { Link } from 'gatsby';
import * as styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1>Create Beautiful Bible Verse Images</h1>
          <p>Generate images with your favorite Bible verses.</p>
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Easy to Use + Customisable</h2>
          <p>Upload your own image, add the Bible verse/text, and download it to your machine.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
