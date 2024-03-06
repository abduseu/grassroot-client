import { Link } from "react-router-dom";
import ManageCard from "../components/ManageCard";
import useAxios, { axiosBase } from "../hooks/useAxios";
import Swal from "sweetalert2";
// import { useState } from "react";

const ManagePage = () => {
    const items = useAxios('/items')
    // const [items, setItems] = useState(loadedItems)

    const handleDeleteItem = (id) => {
        axiosBase.delete(`/items/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Product deleted from cart.',
                        'success'
                    )
                    // Reload the page
                    window.location.reload();
                    
                    // const remaining = items.filter(x => x._id !== id)
                    // setItems(remaining)
                }
            })

        console.log('clicked: ', id)
    }

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 mb-4 gap-5 w-full">
                Manage
            </div>
            <Link to='/add'><button className="btn btn-success bg-green text-white block mx-auto">Add Items</button></Link>
            <div className="lg:flex">
                <div className="p-5 w-full space-y-12">
                    <div>
                        {
                            items.map(x => <ManageCard key={x._id} obj={x} handleDeleteItem={handleDeleteItem} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePage;