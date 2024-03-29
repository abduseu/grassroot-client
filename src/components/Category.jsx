const Category = () => {
    return (
        <div className="text-white text-2xl font-bold">
            <div>
                <div className="my-14 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
                    <div className="p-5 bg-green rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/SVLQTMc/plate-04.png" className="py-4" />
                        Appetizer
                    </div>
                    <div className="p-5 bg-green rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/0cqfCt6/plate-02.png" className="py-4" />
                        Entrees
                    </div>
                    <div className="p-5 bg-green rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/R7mjqrs/plate-03.png" className="py-4" />
                        Signature
                    </div>
                    <div className="p-5 bg-green rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/tz94hbD/plate-01.png" className="py-4" />
                        Dessert
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;