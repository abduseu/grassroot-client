import MenuCard from "../components/MenuCard";

const MenuPage = () => {
    return (
        <div>
            <div className="border text-black rounded-lg text-center text-xl md:text-5xl font-black">
                <div className="p-5 gap-5 w-full">
                    Menu
                </div>
            </div>
            <div className="flex">
                <div className="p-5 w-full border">
                    <MenuCard></MenuCard>
                    <MenuCard></MenuCard>
                    <MenuCard></MenuCard>
                </div>
                <div className="p-5 w-full border">
                    <MenuCard></MenuCard>
                    <MenuCard></MenuCard>
                    <MenuCard></MenuCard>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;