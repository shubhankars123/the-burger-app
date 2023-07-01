import React from 'react'
import me from "../../assets/FB_IMG_1643988778075.jpg"

const Users = () => {

    const arr = [1, 2, 3, 4]

    return (

        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>

                    <tbody>
                        {arr.map((i) => {
                            return (
                                <tr key={i}>
                                    <td>#uiasbgbgdchjabsjd</td>
                                    <td>Shubh</td>
                                    <td>
                                        <img src={me} alt="" />
                                    </td>
                                    <td>Admin</td>
                                    <td>{"24-23-2023"}</td>
                                </tr>
                            );
                        })}
                    </tbody>


                </table>
            </main>
        </section>
    )
}

export default Users
