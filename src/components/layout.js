
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default ({children}) => {

  
  return (
    
    <div>
        <Navbar />
        {children}
        <Footer />
    
    </div>
  )
}


