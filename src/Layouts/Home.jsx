import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import Reviews from "./Reviews";
import CraftItems from "./CraftItems";
import FAQs from "./FAQs";
// import Cards from "../Cards/Cards";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            {/* <Cards></Cards> */}
            <CraftItems></CraftItems>
            <FAQs></FAQs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;