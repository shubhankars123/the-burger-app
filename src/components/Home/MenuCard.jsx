import React from 'react';
import { motion } from "framer-motion"

const MenuCard = ({itemNum, burgerSrc, price, title, handler}) => {
    return (
        <motion.div className='menuCard' 
        
        initial={{
            x:"-100%",
            opacity: 0
        }}

        whileInView={{
            x:0,
            opacity: 1
        }}

        >
            <div>Item {itemNum} </div>
            <main>
                <img width="90%"
                src={burgerSrc} alt={itemNum} />

                <h5>₹{price}</h5>

                <p>{title}</p>

                <button onClick={()=> handler()}> Buy Now </button>

            </main>
        </motion.div>
    )
}

export default MenuCard
