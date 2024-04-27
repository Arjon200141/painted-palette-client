import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import FAQ from "./FAQ";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;