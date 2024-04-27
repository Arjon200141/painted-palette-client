import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import FAQ from "./FAQ";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <FAQ></FAQ>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;