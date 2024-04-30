import PropTypes from 'prop-types';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ card, handleDelete, categorySec }) => {


    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])
    const nav = useNavigate();
    const navigate =sc=>{
        nav(`/subcategory/${sc.split(' ').join('_')}`);

    }
    const handleUpdate= id =>{
        nav(`/updateinfo/${id}`);
    }

    const { _id, item_name, image, short_description, customization, stock_status, price, subcategory_name } = card;
    if (categorySec) return (
        <div onClick={()=>navigate(subcategory_name)} className="card card-compact bg-lime-50 text-black border-white border-2 shadow-xl" data-aos="fade-up">
            <figure><img src={image} alt="Shoes" className="md:h-[300px] w-full" data-aos="zoom-in-up" /></figure>
            <div className="card-body px-6 py-4 space-y-3">
                <h2 className="card-title text-xl font-bold">{item_name}</h2>

                <p className="text-lg"><span className="text-lg font-medium">Category : </span>{subcategory_name}</p>
                <p className="text-lg"><span className="text-lg font-medium">Stock Status : </span>{stock_status}</p>

            </div>

        </div>
    )
    else return (
        <div>
            <div className="card card-compact bg-lime-50 text-black border-white border-2 shadow-xl" data-aos="fade-up">
                <figure><img src={image} alt="Shoes" className="md:h-[300px] w-full" data-aos="zoom-in-up" /></figure>
                <div className="card-body px-6 py-4 space-y-3">
                    <h2 className="card-title text-xl font-bold">{item_name}</h2>

                    <p className="text-lg"><span className="text-lg font-medium">Short Description: </span>{short_description}</p>
                    <p className="text-lg"><span className="text-lg font-medium">Category </span>{subcategory_name}</p>

                    <div className="md:flex justify-between">
                        <p className="text-lg"><span className="text-lg font-medium">Price: </span>{price}</p>
                        <p className="text-lg"><span className="text-lg font-medium">Customization: </span>{customization}</p>
                    </div>

                    <p className="text-lg"><span className="text-lg font-medium">Stock Status: </span>{stock_status}</p>

                    <div className="flex justify-between" data-aos="fade-up">
                        {
                            location.pathname === "/artscraftlist"
                                ?
                                <>
                                    <div className="card-actions justify-end ">
                                        <button onClick={()=>handleUpdate(_id)} className="btn px-8 w-full bg-blue-400 md:text-lg font-semibold">Update</button>
                                    </div>
                                    <div className="card-actions justify-end ">
                                        <button  onClick={() => { handleDelete(_id) }} className="btn px-8 w-full bg-red-100 md:text-lg font-semibold">Delete</button>
                                    </div>
                                </>
                                :
                                <> <Link to={`/cards/${card._id}`}>
                                    <div className="card-actions justify-end ">
                                        <button className="btn px-8 w-full bg-red-100 md:text-lg font-semibold">View Details</button>
                                    </div>
                                </Link>
                                </>
                        }
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
