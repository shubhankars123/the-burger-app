import React from 'react'
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"
import me from "../../assets/FB_IMG_1643988778075.jpg"

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>

        <article>
            <h4>The BURGER APP</h4>
            <p>We serve you the best Burger on the Planet.</p>

            <p>Explore the various type of food. Click below to see the menu.</p>
        
        <Link to="/">
                <RiFindReplaceLine />
        </Link>
        
        </article>

        <div>
            <h2>Founder</h2>

            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Shubhankar Satpathy</h3>
                </div>

                <p>I am Shubhankar Satpathy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi nihil animi tempora consequuntur minima temporibus. Nesciunt eaque iure in, veritatis odit illum.</p>
            </article>
        </div>
      </main>
    </section>
  )
}

export default About
