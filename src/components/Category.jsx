const Category = () => {
    return (
        <div className="text-white text-center text-2xl font-semibold uppercase">
            <div>
                <div className="my-14 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
                    <div className="p-5 bg-green rounded-lg">box-1</div>
                    <div className="p-5 bg-green rounded-lg">box-2</div>
                    <div className="p-5 bg-green rounded-lg">box-3</div>
                    <div className="p-5 bg-green rounded-lg">box-4</div>
                </div>
            </div>
        </div>
    );
};

export default Category;