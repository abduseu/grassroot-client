import ManagerDrawer from './ManagerDrawer';

const ReceivedOrders = () => {
    return (
        <div className="md:flex border">
            <ManagerDrawer></ManagerDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Received Orders</h3>
                        <div className="text-left space-y-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceivedOrders;