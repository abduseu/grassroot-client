import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useAxios, { axiosBase } from "../hooks/useAxios";

const UpdatePage = () => {
    const {id} = useParams()
    const item = useAxios(`/items/${id}`)
    const { _id, food_name, food_category, ingredients, price, food_image } = item

    const handleUpdateItem = e => {
        e.preventDefault()
        const form = e.target
        const food_name = form.foodName.value
        const food_category = form.foodCategory.value
        const ingredients = form.ingredients.value
        const price = form.price.value
        const food_image = form.image.value

        const item = { food_name, food_category, ingredients, price, food_image }

        console.log('form:', item)

        axiosBase.put(`/items/${_id}`, item)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Food item Updated!',
                        'Food item has been updated',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 mb-4 gap-5 w-full">
                Update
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <form onSubmit={handleUpdateItem}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3>Food Name:</h3>
                            <input type="text" name="foodName" defaultValue={food_name} placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Food Category:</h3>
                            <select name="foodCategory" defaultValue={food_category} className="select select-bordered w-full">
                                <option value="Appetizer">Appetizer</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Entrees">Entrees</option>
                                <option value="Signature">Signature</option>
                            </select>
                        </div>
                        <div>
                            <h3>Ingredients:</h3>
                            <input type="text" name="ingredients" defaultValue={ingredients} placeholder="ex. Baguette, Garlic, Butter" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Price:</h3>
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Image URL:</h3>
                            <input type="url" name="image" defaultValue={food_image} placeholder="Paste image url here" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-success bg-green text-white block mx-auto mt-4">Update Item</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdatePage;