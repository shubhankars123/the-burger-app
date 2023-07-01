import React from 'react'

const OrderDetails = () => {



  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
            <h1>Shipping</h1>
            <p>
                <b>Address</b>
                {"sjda 12-12ss dsad"}
            </p>
        </div>

        <div>
            <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"Shubhankar "}
            </p>

            <h1>Phone</h1>
            <p>
                <b>Name</b>
                {7879776574}
            </p>
        </div>

        <div>
            <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"Processing"}
            </p>
            <p>
                <b>Placed At </b>
                {"23-02-2002"}
            </p>
            <p>
                <b>Delivered At </b>
                {"23-02-2002"}
            </p>
        </div>


        <div>
            <h1>Payment</h1>
            <p>
                <b>Order Status</b>
                {"Processing"}
            </p>
            <p>
                <b>Payment Method </b>
                {"Online"}
            </p>
            <p>
                <b>Payment Reference</b>
                {"asbhdvas"}
            </p>
            <p>
                <b>Paid At</b>
                {"Date given"}
            </p>
        </div>
        
        <div>
            <h1>Amount</h1>
            <p>
                <b>Items Total</b>
                ₹{2312}
            </p>
            <p>
                <b>Shipping Charges </b>
                ₹{65}
            </p>
            <p>
                <b>Tax</b>
                ₹{22}
            </p>
            <p>
                <b>Total</b>
                ₹{2312 + 65 + 22}
            </p>
            <p>
                <b>Paid At</b>
                {"Date given"}
            </p>
        </div>

        <article>
            <h1>Ordered Items</h1>

            <div>
                <h4>Veg Cheese Burger</h4>
                <div>
                    <span>{12}</span>X
                    <span>{500}</span>
                </div>
            </div>
            <div>
                <h4> Cheese Burger</h4>
                <div>
                    <span>{10}</span> x 
                    <span>{500}</span>
                </div>
            </div>
            <div>
                <h4> Cheese hamBurger</h4>
                <div>
                    <span>{10}</span> x 
                    <span>{500}</span>
                </div>
            </div>
            <div>
                <h4 style={{
                    fontWeight:800
                }}> Sub Total </h4>
                <div style={{
                    fontWeight:800
                }}>
                   ₹{2132}
                </div>
            </div>



        </article>
      </main>
    </section>
  )
} 

export default OrderDetails
