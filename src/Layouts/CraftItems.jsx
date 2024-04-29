import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";

const CraftItems = () => {
    const paintings=useLoaderData();
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center my-4">Artisan's Corner</h2>
            <p className="text-slate-400 text-lg text-center my-4 md:mx-20">Explore a world of handmade wonders in the Craft Items Section, where creativity meets craftsmanship.Dive into a treasure trove of artisanal delights at the Craft Items Section, brimming with unique pieces crafted with passion and skill.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
                {
                    paintings.slice(0, 6).map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default CraftItems;