const MenuCard = () => {
    return (
        <div className="md:flex justify-between items-center my-4">
            <div className="md:flex">
                <img src="https://i.ibb.co/tz94hbD/plate-01.png" className=" w-24" />
                <div>
                    <h3 className="font-bold text-xl">Chicken Sizzling</h3>
                    <p className="text-sm ">Chicken, Onion, Capsicum, Sweet Chilli sauce</p>
                </div>
            </div>
            <h3 className="green font-bold text-xl">$15</h3>
        </div>
    );
};

export default MenuCard;