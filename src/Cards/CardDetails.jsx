import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {

    const card = useLoaderData();
    console.log(card);

    return (
        <div>
            <Helmet>
                <title>Details of Card</title>
            </Helmet>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col md:flex-row md:gap-12 md:mx-12">
                    <img src={card.image} className="md:w-[600px] h-[600px] rounded-lg shadow-2xl " />
                    <div className="text-lg md:mx-8 ">
                        <h1 className="text-3xl font-bold">{card.item_name}</h1>
                        <p className="py-4">{card.short_description}</p>
                        <hr />
                        <div className="flex justify-between mt-4">
                            <p><span className="font-medium">Stock Status : </span>{card.stock_status}</p>
                            <p className="flex items-center gap-2"><FaLocationDot /> {card.location}</p>
                        </div>
                        <div className="flex justify-between my-4">
                            <p><span className="font-medium">Status : </span>{card.status}</p>
                            <p><span className="font-medium">Price : </span>{card.price}</p>
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