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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
                {
                    paintings.map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default AllCrafts;