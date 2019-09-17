
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  
  return (
    
    <div>
     
        <Navbar />
    
    </div>
  )
}

export default Layout
