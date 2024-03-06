import ManageCard from "../components/ManageCard";
import useAxios from "../hooks/useAxios";

const ManagePage = () => {
    const items = useAxios('/items')

    return (
        <div className="border border-green-400 rounded-lg">
            <div className="text-black text-center text-xl md:text-5xl font-black p-5 gap-5 w-full">
                Manage
            </div>
            <div className="lg:flex">
                <div className="p-5 w-full space-y-12">
                    <div>
                        {
                            items.map(x => <ManageCard key={x._id} obj={x} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePage;