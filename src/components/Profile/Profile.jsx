import React from 'react';
import { motion } from 'framer-motion';
import me from "../../assets/FB_IMG_1643988778075.jpg";
import {Link} from "react-router-dom"

const Profile = () => {
    const options = {
    
    }
  return (
    <section className='profile'>
        <main>
            <motion.img src={me} alt='User' {...options} />

            <motion.h5 {...options} > Shubhankar </motion.h5>

            <motion.div {...options}  > 
                <Link to="/admin/dashboard"> Dashboard </Link> 
            </motion.div>
            <motion.div  > 
                <Link to="/myorders"> Order </Link> 
            </motion.div>

            <motion.button > Logout </motion.button>


        </main>
    </section>
  )
}

export default Profile
