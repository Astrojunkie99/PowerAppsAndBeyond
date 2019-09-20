import React from "react";
import LazyHero from "../components/lazy-hero";

import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/styles.scss';

const IndexPage =()=> {
 
    
    
    return ( 
    <html> 
      <LazyHero featureImage="./images/Mars.jpg" />
      <Layout>
        <SEO title="Home" />
      
      </Layout>
    </html>
    )
} 

export default IndexPage
