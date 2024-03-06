const ManageCard = ({obj}) => {
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
            <h3 className="green font-bold text-xl">${price}</h3>
        </div>
    );
};

export default ManageCard;