import { useNavigate, useParams } from "react-router-dom";
import useAxios, { axiosBase } from "../hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const SinglePage = () => {
    const { id } = useParams()
    const item = useAxios(`/items/${id}`)
    const { _id, food_image, food_name, ingredients, price } = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const [, refetch] = useCart();

    const handleAddCart = ()=>{
        const userId = user.email
        const itemId = _id
        const foodName = food_name
        const quantity = 1
        const foodPrice = price

        const cart = {userId, itemId, foodName, quantity, foodPrice}

        
        axiosBase.post('/cart', cart)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                refetch()
                Swal.fire(
                    'Food Added!',
                    'Your food added to cart!',
                    'success'
                )
                //redirect
                navigate('/menu')
            }
        })
    }

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 mb-4 gap-5 w-full">
                {food_name}
            </div>

            <div className="md:flex text-center justify-between items-center w-3/4 mx-auto my-4">
                <div className="md:flex items-center">
                    <img src={food_image} className="mx-auto w-24" />
                    <div>
                        <p className="text-xl ">{ingredients}</p>
                    </div>
                </div>
                <h3 className="green font-bold text-xl">${price}</h3>
            </div>

            <div className="text-center py-5">
                <button onClick={handleAddCart} className="btn btn-success bg-green text-white block mx-auto">Add Item</button>
            </div>
        </div>
    );
};

export default SinglePage;