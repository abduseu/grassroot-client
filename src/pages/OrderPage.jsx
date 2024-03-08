import { useEffect, useState } from "react";
import { axiosBase } from "../hooks/useAxios";

const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosBase(`/orders`)
            .then(res => {
                setOrders(res.data);
            })
    }, []);

    const handleMarkAsComplete = () =>{
        console.log('completed')
    }

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 mb-4 gap-5 w-full">
                Orders
            </div>

            <div className="lg:flex">
                <div className="p-5 w-full space-y-12">
                    <div>
                        {orders.map(order => (
                            <div key={order._id} className="flex justify-between items-center my-4 md:w-3/4 mx-auto">
                                <div className="md:flex items-center border rounded-lg p-8 w-full">
                                    <div className="w-full">
                                        <h3 className="font-bold text-xl">{order.userEmail}</h3>
                                        <ul>
                                            {order.items.map(x => (
                                                <li key={x.itemId} className="flex justify-between gap-2">
                                                    <p className="font-semibold">{x.foodName}</p>
                                                    <div className="flex gap-2 md:gap-8">
                                                        <p>Qty: {x.quantity}</p>
                                                        <p>Price: <span>${x.foodPrice}</span></p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="font-black mb-4">Total Price: <span>${order.totalPrice}</span></p>
                                        {order.status === "pending" ? (
                                            <div>
                                                <span className="text-red-600 font-bold block mx-auto">Pending</span>
                                                <button className="btn btn-success bg-green text-white block mx-auto" onClick={() => handleMarkAsComplete(order._id)}>Mark as complete</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <span className="green font-bold block mx-auto">Completed</span>
                                                <button className="btn btn-success bg-green text-white block mx-auto" onClick={() => handleMarkAsComplete(order._id)}>Delete</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
