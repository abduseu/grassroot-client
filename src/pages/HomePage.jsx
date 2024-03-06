import Banner from "../components/Banner";
import Category from "../components/Category";
import ContactForm from "../components/ContactForm";
import Sale from "../components/Sale";
import MenuPage from "./MenuPage";

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <MenuPage/>
            <Sale />
            <ContactForm />
        </div>
    );
};

export default Homepage;