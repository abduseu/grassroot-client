const ManageCard = ({ obj }) => {
    const { food_image, food_name, food_category, price } = obj;

    return (
        <div className="md:flex justify-between items-center my-4">
            <div className="md:flex items-center">
                <img src={food_image} className=" w-24" />
                <div>
                    <h3 className="font-bold text-xl">{food_name}</h3>
                    <p className="text-sm ">{food_category}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 font-bold text-xl">
                <h3 className="green">${price}</h3>
                <button className="btn btn-sm">Edit</button>
                <button className="btn btn-sm text-red-600">X</button>
            </div>
        </div>
    );
};

export default ManageCard;