import React from "react";
import LazyHero from "../components/lazy-hero";

import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/styles.scss';
import BlogList from "../components/blogList";
import BlogHeadliner from "../components/blogheadliner";

const IndexPage =()=> {
  
    return ( 
    <html> 
      <LazyHero featureImage="./images/Mars.jpg" />
      <Layout>
        <SEO title="Home" />
        <BlogHeadliner />
        <BlogList />
      </Layout>
    </html>
    )
} 

export default IndexPage
