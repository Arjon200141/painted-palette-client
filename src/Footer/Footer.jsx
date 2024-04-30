import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="bg-lime-100">
            <footer className="footer p-10  text-base-content">
                <aside className="pl-16 md:pl-12 space-y-2 text-lg">
                    <p className="text-3xl font-semibold" data-aos="zoom-in-down">Painted Palette</p>
                    <p className="flex items-center gap-2" data-aos="fade-right"
                    ><FaPhone />+880 1236 87233</p>
                    <p className="flex items-center gap-2" data-aos="fade-right"><MdEmail />palette657@gmail.com</p>
                    <p className="flex gap-2" data-aos="fade-right"><FaMapLocation />123 Gulshan Avenue , Badda , <br />Dhaka-1213 , Bangladesh</p>
                </aside>
                <nav className="mx-28 md:mx-0">
                    <h6 className="footer-title text-black text-center text-xl" data-aos="flip-left">Services</h6>
                    <a className="link link-hover " data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="100">Branding</a>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="200">Design</a>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="300">Marketing</a>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="400">Advertisement</a>
                </nav>
                <nav className="mx-28 md:mx-0">
                    <h6 className="footer-title text-black text-center text-xl" data-aos="flip-left">Legal</h6>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="100">Terms of use</a>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="200">Privacy policy</a>
                    <a className="link link-hover" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="300">Cookie policy</a>
                </nav>
                <nav className="mx-16 md:mx-0">
                    <h2 className="footer-title pt-8 text-center text-xl text-black border-b-2 border-gray-500 w-full pb-4">Social</h2>

                    <div className="grid grid-flow-col gap-2 md:gap-12">
                        <a><img src="https://i.ibb.co/GTL1Rfz/twitter-1.png" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/dbvX6Fr/instagram-icon-1057-2227.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/181L2mT/facebook-icon-488108-2.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/hKQbH1J/3d-icon-social-media-app-23-2150049587.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/fHBG2jM/github.png" alt="" className="h-8 w-8" /></a>
                    </div>
                </nav>
            </footer>
            <hr />
            <aside className="text-center py-6" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="200">
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;