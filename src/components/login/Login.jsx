import React from 'react';
import {motion} from "framer-motion"
import { MdAccountBox } from "react-icons/md";

const Login = () => {
  return (
    <section className='login'>
      <motion.button 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      > 
        Login with Google 
        <MdAccountBox/>
      </motion.button>
    </section>
  )
}

export default Login
