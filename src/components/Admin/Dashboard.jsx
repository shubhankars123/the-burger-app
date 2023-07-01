import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from "chart.js";
import { Link } from 'react-router-dom';
import Loader from '../layout/Loader';

ChartJs.register(Tooltip, ArcElement, Legend)

const Box = ({ title, value }) => {
    return (<div>
        <h3>
            {title === "Income" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>)
};

const Dashboard = () => {

    const loading = true;

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: [2, 3, 4],
                backgroundColor: ["rgb(159, 63, 176)", "rgb(78, 63, 176)", "rgb(156, 0, 68)"],
                borderColor: ["rgb(159, 63, 176)", "rgb(78, 63, 176)", "rgb(156, 0, 68)"],
                borderWidth: 1
            }
        ]
    }


    return (
        <div className='dashboard'>

            {
                loading === false ? <main>
                    <article>
                        <Box title="Users" value={213} />
                        <Box title="Orders" value={213} />
                        <Box title="Income" value={213} />
                    </article>

                    <section>
                        <div>
                            <Link to={"/admin/orders"}>View Orders</Link>
                            <Link to={"/admin/users"}>View Users</Link>
                        </div>

                        <aside>
                            <Doughnut data={data} />
                        </aside>
                    </section>
                </main> : <Loader />
            }

        </div>
    )
}

export default Dashboard
