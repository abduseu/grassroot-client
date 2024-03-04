const Banner = () => {
    return (
        <div className="bg-[#2F2D2D] lg:bg-gradient-to-r from-black to-gray-600 text-white rounded-lg lg:flex lg:justify-between lg:items-center">
            <div className="font-black max-w-2xl leading-snug p-10 text-5xl md:text-7xl md:p-20 md:leading-snug">
                <h2>Delight in<br />
                    <span>Every Bites</span> <br/>
                </h2>
                <p className="font-thin text-lg">At Grassroot, savor the finest flavors in every dish. Our passion for fresh ingredients and culinary excellence ensures each bite is a delightful experience. Join us on a journey of taste sensations, where every dish tells a story of craftsmanship and flavor.</p>
            </div>
            <div className="max-w-2xl">
                <div className="lg:p-20 overflow-hidden">
                    <img src="https://i.ibb.co/nsQhqkS/dish.png" className="banner_img p-4" />
                </div>
            </div>
        </div>
    );
};

export default Banner;