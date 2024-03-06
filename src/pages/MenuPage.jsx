import useAxios from '../hooks/useAxios';
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
    const items = useAxios('/items')
    const appetizer = items.filter(x=> x.food_category === "Appetizer")
    const entrees = items.filter(x=> x.food_category === "Entrees")
    const signature = items.filter(x=> x.food_category === "Signature")
    const dessert = items.filter(x=> x.food_category === "Dessert")

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
                            {
                                appetizer.map(x => <MenuCard key={x._id} obj={ x } />)
                            }

                        </div>

                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Signature</h2>
                            {
                                signature.map(x => <MenuCard key={x._id} obj={ x } />)
                            }
                        </div>
                    </div>
                    <div className="p-5 w-full space-y-12">
                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Entrees</h2>
                            {
                                entrees.map(x => <MenuCard key={x._id} obj={ x } />)
                            }
                        </div>

                        <div>
                            <h2 className="font-black text-2xl uppercase lg:pl-5">Dessert</h2>
                            {
                                dessert.map(x => <MenuCard key={x._id} obj={ x } />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;