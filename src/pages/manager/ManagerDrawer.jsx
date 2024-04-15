import { Link } from "react-router-dom";

const ManagerDrawer = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-prim drawer-button lg:hidden">Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-80 min-h-full bg-green-50">
                        {/* Sidebar content here */}
                        <li className="font-semibold text-2xl mb-4 uppercase">Dashboard</li>
                        <li><Link to={'/manager'}>Manager Profile</Link></li>
                        <li><Link to={'/add'}>Add Item</Link></li>
                        <li><Link to={'/manage'}>Manage Item</Link></li>
                        <li><Link to={'/orders'}>Received Orders</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ManagerDrawer;