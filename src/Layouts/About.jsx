import { Helmet } from "react-helmet-async";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({duration : 500})
    },[])
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="mx-16 my-6 border-2 border-slate-400 p-4 rounded-lg bg-base-200">
                <h2 data-aos="flip-right" className="text-2xl font-medium my-4">Welcome to Our Residential Real Estate Platform</h2>
                <p data-aos="fade-down" className="text-lg my-3">At <span className="font-medium">Luxury Reside</span>, we're passionate about helping you find your dream home. Whether you're searching for a cozy apartment in the heart of the city or a spacious family house in the suburbs, we have a wide range of residential properties to suit every lifestyle and budget.</p>
                <hr />
                <h2 data-aos="fade-down" className="text-2xl font-medium my-4">Explore a Variety of Residential Properties</h2>
                <p data-aos="fade-down" className="text-lg my-1">Discover an extensive collection of residential properties, including:</p>
                <ul className="list-disc ml-4 my-4">
                    <li data-aos="fade-down" className="text-lg"><span className="text-lg font-medium">Apartments: </span>Experience urban living at its finest with our selection of modern apartments featuring sleek designs and convenient amenities.</li>
                    <li data-aos="fade-down" className="text-lg"><span className="text-lg font-medium">Houses: </span>Find your perfect family home among our diverse range of houses, from charming cottages to luxurious estates, each offering unique features and ample space for comfortable living.</li>
                    <li data-aos="fade-down" className="text-lg"><span className="text-lg font-medium">Condos: </span>Explore upscale condominiums offering luxury amenities and breathtaking views, perfect for those seeking a sophisticated urban lifestyle.</li>
                    <li data-aos="fade-down" className="text-lg"><span className="text-lg font-medium">Townhomes: </span>Enjoy the best of both worlds with our townhomes, combining the privacy of a single-family home with the convenience of community living.</li>
                </ul>
                <hr />
                <h2 data-aos="fade-down" className="text-2xl font-medium my-3">Why Choose Luxury Reside?</h2>
                <ul data-aos="fade-down" className="list-disc ml-4 my-4">
                    <li className="text-lg"><span className="text-lg font-medium">Expert Guidance: </span>Our team of experienced real estate professionals is dedicated to guiding you through every step of the buying or renting process, ensuring a smooth and stress-free experience.</li>
                    <li className="text-lg"><span className="text-lg font-medium">Comprehensive Listings:</span>With our extensive database of residential properties, you'll have access to a wide range of options tailored to your preferences and requirements.</li>
                    <li className="text-lg"><span className="text-lg font-medium">Personalized Service: </span>We understand that finding the perfect home is a deeply personal journey. That's why we take the time to listen to your needs and provide personalized recommendations to help you find your ideal living space.</li>
                </ul>
                <hr />
                <h2 data-aos="fade-down" className="text-2xl font-medium my-3">Start Your Journey Today</h2>
                <p data-aos="fade-down" className="text-lg my-3">Ready to find your dream home? Explore our residential real estate listings today and take the first step towards making your housing dreams a reality. Whether you're a first-time buyer, a growing family, or a seasoned investor, we're here to help you find the perfect place to call home.</p>
            </div>
        </div>
    );
};

export default About;