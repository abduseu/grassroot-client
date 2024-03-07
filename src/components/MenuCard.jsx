import { Link } from "react-router-dom";

const MenuCard = ({ obj }) => {
    const { _id, food_image, food_name, ingredients, price } = obj;
    //console.log(obj)
    return (
        <Link to={`/items/${_id}`}>
            <div className="md:flex justify-between items-center my-4">
                <div className="md:flex items-center">
                    <img src={food_image} className=" w-24" />
                    <div>
                        <h3 className="font-bold text-xl">{food_name}</h3>
                        <p className="text-sm ">{ingredients}</p>
                    </div>
                </div>
                <h3 className="green font-bold text-xl">${price}</h3>
            </div>
        </Link>
    );
};

export default MenuCard;