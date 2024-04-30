import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import Reviews from "./Reviews";
import CraftItems from "./CraftItems";
import FAQs from "./FAQs";
import SC from "./SC";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <CraftItems></CraftItems>
            <SC></SC>
            <FAQs></FAQs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;