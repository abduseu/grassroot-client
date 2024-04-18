import Swal from 'sweetalert2';
import useAxios, { axiosBase } from '../../hooks/useAxios';
import ManagerDrawer from './ManagerDrawer';

const ReceivedOrders = () => {
    const orders = useAxios('/orders')

    const handleMarkAsComplete = (id) => {

        axiosBase.put(`/orders/${id}`, {status: "completed"})
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Order Completed',
                        'Order marked as completed',
                        'success'
                    )
                    // Reload the page
                    window.location.reload();
                }
            })
    }

    const handleDeleteOrder = (id) => {
        axiosBase.delete(`/orders/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Order deleted!!!.',
                        'success'
                    )
                    // Reload the page
                    window.location.reload();
                }
            })
    }

    return (
        <div className="md:flex border">
            <ManagerDrawer></ManagerDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Received Orders</h3>
                        <div className="text-left space-y-4">
                            <div>
                                {orders.map(order => (
                                    <div key={order._id} className="flex justify-between items-center my-4 mx-auto">
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
                                                        <button className="btn btn-error bg-red-600 text-white block mx-auto" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
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
            </div>
        </div>
    );
};

export default ReceivedOrders;