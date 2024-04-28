import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";
import Marqueenews from "../Header/Marqueenews";
import Reviews from "./Reviews";
import BannerSlider from "../Header/BannerSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Resides</title>
            </Helmet>
            <Marqueenews></Marqueenews>
            <BannerSlider></BannerSlider>
            <Cards></Cards>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;