import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Card from "../Cards/Card";

const Craftlist = () => {
    const paintings =useLoaderData();
    console.log(paintings);
    const {user} = useContext(AuthContext);
    const filteredItems = paintings.filter(item => item.user_email===user.email);
    return (
        <div className="m-12">
            <div className="grid md:grid-cols-3 gap-3">
                {
                    filteredItems.map(card=><Card key={card._id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Craftlist;