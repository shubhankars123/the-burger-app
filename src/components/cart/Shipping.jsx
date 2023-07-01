import React from 'react'
import { Country, State  } from 'country-state-city'


const Shipping = () => {
  return (
    <section className='shipping'>
        
    <main>
        <h1>Shipping Details</h1>
        <form action="">
            <div>
                <label htmlFor="">H.No.</label>
                <input type="text" placeholder='Enter House No.' />
            </div>

            <div>
                <label htmlFor="">City</label>
                <input type="text" placeholder='Enter City' />
            </div>

            <div>
                <label>Country</label>

                <select >
                    <option value="">Country</option>
                        {    Country &&
                            Country.getAllCountries().map((i)=> {
                                return (<option value={i.isoCode} key={i.isoCode}>
                                   {i.name}
                                </option>)
                            })
                    }
                </select>

            </div>

            <div>
                <label htmlFor="">State</label>
                <select name="" id="">
                    <option value="">State</option>
                    {   State &&
                            State.getStatesOfCountry("IN").map((i)=>{
                               return ( <option value={i.isoCode} key={i.isoCode}>
                                {i.name}
                            </option>)
                            })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="">Pin Code</label>
                <input type="Number" placeholder='Enter House No.' />
            </div>
            <div>
                <label htmlFor="">Phone no.</label>
                <input type="Number" placeholder='Enter House No.' />

            </div>
                <button type='submit'>Confirm Order</button>
        </form>
    </main>

    </section>
  )
}

export default Shipping
