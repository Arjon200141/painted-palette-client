import { Helmet } from "react-helmet-async";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({duration : 500})
    },[])

    return (
        <div data-aos="fade-down-right" className="md:mx-32 pl-20 p-8 border-2 border-dashed rounded-xl my-8 bg-lime-50">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <p className="text-lg my-4">At <span>Luxury Reside</span>, we're here to assist you with all your residential property needs. Whether you're looking to buy, sell, or rent a home, our dedicated team is ready to help. Get in touch with us today to start your real estate journey!</p>
            <h2 className="text-lg font-medium">Address : </h2>
            <ul className="list-disc ml-6 my-4">
                <li className="text-lg"><span className="font-medium">Company Name : </span> Luxury Reside</li>
                <li className="text-lg"><span className="font-medium">Street Address</span>123 Gulshan Avenue</li>
                <li className="text-lg"><span className="font-medium">City, State, ZIP Code : </span>1213 , Badda , Dhaka</li>
                <li className="text-lg"><span className="font-medium">Country : </span> Bangladesh</li>
            </ul>
            <hr />
            <h2 className="text-lg font-medium my-4">Phone:</h2>
            <ul className="list-disc ml-6 my-4">
                <li className="text-lg"><span className="font-medium">Main Office: </span>+99 547 3798 34</li>
                <li className="text-lg"><span className="font-medium">Sales Enquiries: </span>+880 1876349883</li>
                <li className="text-lg"><span className="font-medium">Customer Support: </span>+28468</li>
                
            </ul>
            <hr />
            <h2 className="text-lg font-medium my-4">Email:</h2>
            <ul className="list-disc ml-6 my-4">
                <li className="text-lg"><span className="font-medium">General Inquiries: </span>abcd3@gmail.com</li>
                <li className="text-lg"><span className="font-medium">Sales Team:  </span> xyzg3@gmail.com</li>
                <li className="text-lg"><span className="font-medium">Customer Support: </span>utyb89@gmail.com</li>
            </ul>
            <hr />
            <h2 className="text-lg font-medium my-4">Office Hours:</h2>
            <ul className="list-disc ml-6 my-4">
                <li className="text-lg"><span className="font-medium">Monday - Friday: </span>9:00 AM to 6:00 PM</li>
                <li className="text-lg"><span className="font-medium">Saturday: </span>10:00 AM to 4:00 PM</li>
                <li className="text-lg"><span className="font-medium">Sunday: </span>Closed</li>
            </ul>
            <hr />
            <h2 className="text-lg font-medium my-4">Social Media: </h2>
            <ul className="list-disc ml-6 my-4 underline text-blue-400">
                <li className="text-lg"><a href="www.facebook.com">Facebook</a></li>
                <li className="text-lg"><a href="www.twitter.com">Twitter</a></li>
                <li className="text-lg"><a href="www.instagram.com">Instagram</a></li>
                <li className="text-lg"><a href="www.linkedIn.com">LinkedIn</a></li>
            </ul>
            <hr />
            <h2 className="text-lg font-medium my-4">Feedback: </h2>
            <p className="text-lg">We value your feedback! If you have any comments, suggestions, or questions, please don't hesitate to reach out to us. Your input helps us improve our services and better serve our clients.</p>
        </div>
    );
};

export default Contact;