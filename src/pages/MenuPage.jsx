import MenuCard from "../components/MenuCard";

const MenuPage = () => {
    return (
        <div>
            <div className="border border-green-400 rounded-lg">
                <div className="text-black text-center text-xl md:text-5xl font-black p-5 gap-5 w-full">
                    Menu
                </div>
                <div className="lg:flex">
                    <div className="p-5 w-full space-y-12">
                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Appetizer</h2>
                            <MenuCard></MenuCard>
                            <MenuCard></MenuCard>
                        </div>

                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Signature</h2>
                            <MenuCard></MenuCard>
                            <MenuCard></MenuCard>
                        </div>
                    </div>
                    <div className="p-5 w-full space-y-12">
                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Entrees</h2>
                            <MenuCard></MenuCard>
                            <MenuCard></MenuCard>
                        </div>

                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Dessert</h2>
                            <MenuCard></MenuCard>
                            <MenuCard></MenuCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;