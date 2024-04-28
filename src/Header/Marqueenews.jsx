import Marquee from "react-fast-marquee";

const Marqueenews = () => {
    return (
        <div className="flex m-6 bg-amber-100 shadow-xl shadow-lime-200 rounded-xl">
            <button className="btn bg-green-200 shadow-2xl text-lg font-medium px-6">Announcement</button>
            <Marquee className="mr-8 text-lg" pauseOnHover={true} speed={100}>
                Find your sanctuary amidst stunning landscapes and cozy abodes in our exclusive residential real estate listings.Elevate your lifestyle: Explore luxurious residential properties for your dream living. 
            </Marquee>
        </div>
    );
};

export default Marqueenews;