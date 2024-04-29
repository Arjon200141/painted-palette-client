import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import Reviews from "./Reviews";
import CraftItems from "./CraftItems";
import FAQs from "./FAQs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <CraftItems></CraftItems>
            <FAQs></FAQs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;