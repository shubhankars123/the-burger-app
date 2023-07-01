import React from 'react';
import { motion } from 'framer-motion';
import me from "../../assets/FB_IMG_1643988778075.jpg"
import "../../styles/founder.scss"

const Founder = () => {

  const options = {
    initial:{
      x:"-100%"
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }
  return (
    <>

    <section className='founder'>
        <motion.div {...options} >
            <img src={me} alt="" />
            <h3>Shubhankar Satpathy</h3>

            <p>Hey, Everyone I am Shubhankar, the founder of MBA Burger Wala. 
              <br />

              Our Aim is to create the most tasty burger in the planet.
            </p>
        </motion.div>
    </section>
      
    </>
  )
}

export default Founder
