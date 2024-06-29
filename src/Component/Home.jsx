import React from 'react'
import Slider_image from '../Component/Slider_image';
import Property from '../Component/Property';
import Place from '../Component/Place';
import Property_Listing from '../Component/Property_Listing';
import Contact_home from '../Component/Contact_home';
import Team from '../Component/Team';
import Testimonial_home from '../Component/Testimonial_home';
function Home(props) {
  return (
    <>
      <Slider_image homeslide={props}  />
      <Property pro={props} />
      <Place/>
      <Property_Listing list={props}/>
      <Contact_home/>
      <Team teamhome={props}/>
      <Testimonial_home teshome={props}/>
    </>
  )
}

export default Home