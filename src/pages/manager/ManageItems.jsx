import Swal from "sweetalert2";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import ManagerDrawer from "./ManagerDrawer";
import ManageCard from "../../components/ManageCard";

const ManageItems = () => {
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
        <div className="md:flex border">
            <ManagerDrawer></ManagerDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Items</h3>
                        <div className="text-left space-y-4">
                            <div>
                                {
                                    items.map(x => <ManageCard key={x._id} obj={x} handleDeleteItem={handleDeleteItem} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;