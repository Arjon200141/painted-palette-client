import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";

import Reviews from "./Reviews";
import BannerSlider from "../Header/BannerSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <Cards></Cards>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;