import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai';
import { GiArmoredBoomerang } from "react-icons/gi"
 
const Orders = () => {

    const arr = [1, 2, 3, 4]

  return (
    <div>
      <section className='tableClass'>
      <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>User</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
              { 
              arr.map(()=>{
                return (

                    <tr>
                    <td>#jhjdwjnf</td>
                    <td> Processing </td>
                    <td> 23 </td>
                    <td> ₹{23312} </td>
                    <td> COD </td>
                    <td> Shubh </td>
                    <td> <Link to={`/order/${"asbdjadfd"}`}> 
                        <AiOutlineEye />
                     </Link> 
                     
                     <button>
                        <GiArmoredBoomerang />
                     </button>
                     </td>
                </tr>

                )
               }) 
               }
            </tbody>

            
        </table>
      </main>
    </section>
    </div>
  )
}

export default Orders
