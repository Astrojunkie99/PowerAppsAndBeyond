import React, {Component} from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/styles.scss';



class IndexPage extends Component {
  render (){
    
    return (    
    <Layout>
      <SEO title="Home" />
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>
    </Layout>
    )
  }
} 

export default IndexPage
