import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("residential.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="m-8">
           
            <div className="space-y-3 mb-8">
                <h2 className="md:text-5xl font-semibold text-center">Residential Estates</h2>
                <p className="text-lg text-gray-500 text-center">Explore our collection of luxurious residential estates offering unparalleled living experiences.From <br />elegant penthouses with breathtaking city views to serene countryside retreats, find your dream home here.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cards.map(card => <Card key={cards.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;