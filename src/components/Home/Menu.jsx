import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assets/hamburger-g05f14e1e8_1280.png"
import burger2 from "../../assets/cheeseburger-g6039cd348_1280.png"
import "../../styles/menu.scss"

const Menu = () => {

    const addToCartHandler =()=>{

    }

  return (
    <>

    <section id='menu'>
        <h1>MENU</h1>

        <div>
            <MenuCard itemNum={1}
             burgerSrc={burger1} price={500} 
             title="Veg Cheese Burger"
             handler={addToCartHandler}
             />
            <MenuCard itemNum={2}
             burgerSrc={burger2} price={500} 
             title=" Cheese Burger"
             handler={addToCartHandler}
             />
            <MenuCard itemNum={3}
             burgerSrc={burger1} price={500} 
             title="Cheese hamBurger"
             handler={addToCartHandler}
             />
        </div>
    </section>
      
    </>
  )
}

export default Menu
