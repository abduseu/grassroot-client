import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    This is header component
                </div>
            </header>
            <main className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    <Outlet></Outlet>
                </div>
            </main>
            <footer className="bg-black text-white">
                <div className="xl:container mx-auto">
                    <div className="mx-5 mt-6">
                        This is footer component
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Root;