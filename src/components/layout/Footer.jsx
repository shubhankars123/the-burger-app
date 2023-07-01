import React from 'react'
import {AiFillInstagram, AiFillGithub } from "react-icons/ai"
import "../../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>The BURGER APP</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em> We give attention to genuine feedback.</em>

        <strong>All rights reserved @theburgerapp</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://github.com/shubhankars123">
            <AiFillGithub />
        </a>
        <a href="https://instagram.com/shubhankar_for_real">
        <AiFillInstagram />
        </a>
        <a href="https://github.com/shubhankars123">
        <AiFillGithub />
        </a>
      </aside>
    </footer>
  )
}

export default Footer
