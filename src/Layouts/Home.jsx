import { Helmet } from "react-helmet-async";
import BannerSlider from "../Header/BannerSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Painted Palette</title>
            </Helmet>
            <BannerSlider></BannerSlider>
        </div>
    );
};

export default Home;