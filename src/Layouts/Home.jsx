import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import CraftItems from "./CraftItems";
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
            <FAQ></FAQ>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;