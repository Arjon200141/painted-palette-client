import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";


const Categories = () => {
    const paintings=useLoaderData();
    console.log(paintings);
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center">Selected Arts</h2>
            <div className="grid md:grid-cols-3 gap-3 my-12">
            {
                paintings.map(card=><Card key={card._id} card={card}></Card>)
            }
            
        </div>
        </div>
    );
};

export default Categories;