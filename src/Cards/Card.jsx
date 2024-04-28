import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getCartEstates, setCardEstates } from "../utility/localStorage";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Card = ({ card }) => {

    useEffect(() => {
        Aos.init({duration : 200})
    },[])

    const { id, estate_title, image, status, area, location, price, category } = card;

    const handleCart = () => {

        const isCartAdded = getCartEstates();
        const exist = isCartAdded.find(cardId => cardId == id);
        if (!exist) {
            setCardEstates(id);
            toast.success('You have added this estate to cart');
        }
        else {
            toast.warn('You have already added this estate to cart!!');
        }

    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                <figure><img src={image} alt="Shoes" className="md:h-[300px] " data-aos="zoom-in-up"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{estate_title}</h2>
                    <div className="flex justify-between">
                        <p className="text-lg"><span className="text-lg font-medium">Status : </span>{status}</p>
                        <p className="text-lg"><span className="text-lg font-medium">Area : </span>{area}</p>
                    </div>
                    <div className="space-y-2 mb-4">
                        <p className="text-lg"><span className="text-lg font-medium">Category : </span>{category}</p>
                        <p className="text-lg"><span className="text-lg font-medium">Location : </span>{location}</p>
                        <p className="text-lg"><span className="text-lg font-medium">Price: </span>{price}</p>
                    </div>
                    <div className="flex justify-between" data-aos="fade-up">
                        <Link to={`/cards/${card.id}`}>
                            <div className="card-actions justify-end ">
                                <button className="btn px-8 w-full bg-red-200 md:text-lg font-medium">View Details</button>
                            </div>
                        </Link>
                        <div onClick={handleCart} className="card-actions justify-end">
                            <button className="btn w-full px-8 bg-green-200 md:text-lg font-medium">Add to Cart</button>
                            <ToastContainer />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array,
}

export default Card;