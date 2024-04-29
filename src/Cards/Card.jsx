import PropTypes from 'prop-types';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    const { _id, name, image, short_description, customization, stock_status, price } = card;
    console.log(card);

    return (
        <div>
            <div className="card card-compact bg-white text-black border-white border-2 shadow-xl" data-aos="fade-up">
                <figure><img src={image} alt="Shoes" className="md:h-[300px] w-full" data-aos="zoom-in-up" /></figure>
                <div className="card-body px-6 py-4">
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                    <p className="text-lg"><span className="text-lg font-medium">Short Description: </span>{short_description}</p>
                    <div className="md:flex justify-between">
                        <p className="text-lg"><span className="text-lg font-medium">Price: </span>{price}</p>
                        <p className="text-lg"><span className="text-lg font-medium">Customization: </span>{customization}</p>
                    </div>
                    <div className="space-y-2 mb-4">

                        <p className="text-lg"><span className="text-lg font-medium">Stock Status: </span>{stock_status}</p>
                    </div>
                    <div className="flex justify-between" data-aos="fade-up">
                        <Link to={`/cards/${card._id}`}>
                            <div className="card-actions justify-end ">
                                <button className="btn px-8 w-full bg-red-100 md:text-lg font-medium">View Details</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;
