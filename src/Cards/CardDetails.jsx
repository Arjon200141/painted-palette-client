import { Helmet } from "react-helmet-async";
import { IoIosBrush } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"; 

const CardDetails = () => {
    const card = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>View Details</title>
            </Helmet>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col md:flex-row md:gap-8 md:mx-12">
                    <img src={card.image} className="md:w-[600px] h-[600px] rounded-lg shadow-2xl " />
                    <div className="text-xl md:h-[600px] md:mx-8 space-y-3 bg-amber-50 rounded-xl py-12 px-12">
                        <h1 className="text-3xl font-bold">
                            
                            <Typewriter
                                words={[card.item_name]} 
                                loop={false} 
                                cursor
                                cursorStyle=''
                                typeSpeed={70} 
                                deleteSpeed={50} 
                                delaySpeed={1000} 
                            />
                        </h1>
                        <h2 className="text-2xl mt-4"><span className="font-semibold">Sub Category :</span> {card.subcategory_name}</h2>
                        <p className="py-4 text-lg">{card.short_description}</p>
                        <hr />
                        <div className="flex md:justify-between">
                            <p><span className="font-medium">Customization : </span>{card.customization}</p>
                            <p><span className="text-lg font-semibold">Rating : </span>{card.rating}</p>
                        </div>

                        <p><span className="font-medium">Status : </span>{card.stock_status}</p>
                        <p><span className="text-lg font-semibold">Processing Time : </span>{card.processing_time}</p>

                        <p><span className="text-lg font-semibold">Price : </span>{card.price}$</p>

                        <div className="md:flex text-lg items-center md:justify-between">
                            <p className="flex gap-1 items-center"><IoIosBrush />{card.user_name}</p>
                            <a className="flex gap-1 items-center"><MdEmail />{card.user_email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="flex justify-center my-8">
                    <button className="btn bg-sky-200 px-6 font-medium text-lg">Go to HomePage</button>
                </div>
            </Link>
        </div>
    );
};

export default CardDetails;
