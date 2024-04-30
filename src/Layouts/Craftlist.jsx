import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Card from "../Cards/Card";
import { ToastContainer, toast } from "react-toastify";

const Craftlist = () => {
    const paintings =useLoaderData();
    console.log(paintings);
    const {user} = useContext(AuthContext);
    const [filteredItems,setfilteredItems]=useState(paintings.filter(item => item.user_email===user.email));
    // const filteredItems = paintings.filter(item => item.user_email===user.email);
    
    const handleDelete=(id)=>{

        console.log(id);
        fetch(`http://localhost:5000/paintings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                
                setfilteredItems(filteredItems.filter(item => item._id!==id));
                toast("Successfully Deleted");
            }

        })
    }
    return (
        <div className="m-12">
            <div className="grid md:grid-cols-3 gap-3">
                {
                    filteredItems.length>0
                    ?
                    filteredItems.map(card=><Card key={card._id} card={card} handleDelete={handleDelete}></Card>)
                    :
                    <>
                    <h2 className="text-4xl text-center">You Havent Added Paintings</h2>
                    </>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Craftlist;