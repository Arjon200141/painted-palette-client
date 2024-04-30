import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";
import { Helmet } from "react-helmet-async";

const AllCrafts = () => {
    const paintings=useLoaderData();
    return (
        <div>
            <Helmet>
                <title>All Arts and Craft Items</title>
            </Helmet>
            <h2 className="text-4xl font-semibold text-center my-8">All Arts and Craft Items</h2>
            <p className="text-lg text-gray-400 text-center">Explore a diverse collection of creative arts and craft items, ranging from paintings and sculptures to handmade jewelry and unique home decor pieces. <br /> Immerse yourself in a world of artistic expression and find inspiration for your next project or decor upgrade.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
                {
                    paintings.map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default AllCrafts;