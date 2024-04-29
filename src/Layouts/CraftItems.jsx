import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";

const CraftItems = () => {
    const paintings=useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    paintings.slice(0, 6).map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default CraftItems;