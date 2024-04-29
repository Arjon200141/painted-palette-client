// import { Helmet } from "react-helmet-async";
// import { FaLocationDot } from "react-icons/fa6";
// import { Link, useLoaderData, useParams } from "react-router-dom";

// const CardDetails = () => {

//     const cards = useLoaderData();
//     const { cardId } = useParams();
//     const cardIdInt = parseInt(cardId)
//     const card = cards.find(card => card.id === cardIdInt);

//     return (
//         <div>
//             <Helmet>
//                 <title>Details of Card</title>
//             </Helmet>
//             <div className="hero bg-base-100">
//                 <div className="hero-content flex-col md:flex-row md:gap-12 md:mx-12">
//                     <img src={card.image} className="md:w-[600px] h-[600px] rounded-lg shadow-2xl " />
//                     <div className="text-lg md:mx-8 ">
//                         <h1 className="text-3xl font-bold">{card.estate_title}</h1>
//                         <p className="py-4">{card.description}</p>
//                         <hr />
//                         <div className="flex justify-between mt-4">
//                             <p><span className="font-medium">Area : </span>{card.area}</p>
//                             <p className="flex items-center gap-2"><FaLocationDot /> {card.location}</p>
//                         </div>
//                         <div className="my-4">
//                             <h2 className="text-xl font-semibold">Facilities : </h2>
//                             <div>
//                                 <ul className="list-disc ml-8">
//                                     {
//                                         card.facilities.map(facilities => <li key={card.cardId} >{facilities}</li>)
//                                     }
//                                 </ul>
//                             </div>
//                         </div>
//                         <hr />
//                         <div className="my-4 space-y-3">
//                             <h2 className="font-medium">Reviews : </h2>
//                             <div className="flex gap-16">
//                                 <p className="flex items-center gap-2 font-medium"><img src="https://i.ibb.co/TTbpFMx/complain.png" alt="" className="h-6 w-6" />{card.reviews.author}</p>
//                                 <p className="flex items-center gap-2 font-medium"><img src="https://i.ibb.co/v4K8tvS/star.png" alt="" className="h-6 w-6" />{card.reviews.rating}</p>
//                             </div>
//                             <p><span className="font-medium">Comment : </span>{card.reviews.comment}</p>
//                         </div>
//                         <hr />
//                         <div className="flex justify-between my-4">
//                             <p><span className="font-medium">Status : </span>{card.status}</p>
//                             <p><span className="font-medium">Price : </span>{card.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Link to="/">
//                 <div className="flex justify-center my-8">
//                     <button className="btn bg-sky-200 px-6 font-medium text-lg">Go to HomePage</button>
//                 </div>
//             </Link>
//         </div>
//     );
// };

// export default CardDetails;
