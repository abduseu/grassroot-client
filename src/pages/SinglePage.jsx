import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const SinglePage = () => {
    const { id } = useParams()
    const item = useAxios(`/items/${id}`)
    const { food_image, food_name, ingredients, price } = item;

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 mb-4 gap-5 w-full">
                {food_name}
            </div>

            <div className="md:flex text-center justify-between items-center w-3/4 mx-auto my-4">
                <div className="md:flex items-center">
                    <img src={food_image} className="mx-auto w-24" />
                    <div>
                        {/* <h3 className="font-bold text-xl">{food_name}</h3> */}
                        <p className="text-xl ">{ingredients}</p>
                    </div>
                </div>
                <h3 className="green font-bold text-xl">${price}</h3>
            </div>

            <div className="text-center py-5">
                <button className="btn btn-success bg-green text-white block mx-auto">Add Item</button>
            </div>
        </div>
    );
};

export default SinglePage;