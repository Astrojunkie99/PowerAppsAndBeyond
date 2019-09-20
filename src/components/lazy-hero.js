import React from 'react';
import LazyHero from 'react-lazy-hero';
import Mars from '../images/Mars.jpg';

function hero (){
    
    return (
        
        <LazyHero imageSrc={Mars} minHeight="75vh" color="black" opacity="0" parallaxOffset="200" transitionDuration="200" style={{width:"100%"}}>
        </LazyHero>
    )

};

export default hero