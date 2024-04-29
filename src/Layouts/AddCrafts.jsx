import { useContext, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const [subcategory_name, setSubCategory] = useState("");
    const [customization, setCustomization] = useState("No");
    const [stock_status, setStockStatus] = useState("In Stock");

    const handleAddPainting = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.paintingName.value;
        const image = form.url.value;
        const short_description = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processingTime.value;
        const user_email = form.userEmail.value;
        const user_Name = form.userName.value;

        const newPainting = { name, image, short_description, price, rating, processing_time, user_email, user_Name, subcategory_name, customization, stock_status }
        console.log(newPainting);
        fetch("http://localhost:5000/paintings", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPainting),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success("INserted")
                }
            })
    }

    return (
        <div className="bg-green-50 py-12 ">
            <h2 className="text-center text-4xl font-semibold">Add Your Painting</h2>
            <form onSubmit={handleAddPainting}>
                <ToastContainer/>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-20 mt-10">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Image URL</span>
                        </div>
                        <input type="text" placeholder="Image URL" name="url" className="input input-bordered w-full pl-5" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Painting Name</span>
                        </div>
                        <input type="text" placeholder="Painting Name" name="paintingName" className="input input-bordered w-full " />
                    </label>
                    <div className="flex justify-start items-end p-0">
                        <div className="dropdown dropdown-right">
                            <div tabIndex={0} role="button" className="btn text-lg">Sub Category <SlArrowDown></SlArrowDown></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                                <li onClick={() => { setSubCategory("Landscape Painting") }}><a >Landscape Painting</a></li>
                                <li onClick={() => { setSubCategory("Portrait Drawing") }}><a>Portrait Drawing</a></li>
                                <li onClick={() => { setSubCategory("Watercolour Painting") }}><a>Watercolour Painting</a></li>
                                <li onClick={() => { setSubCategory("Oil Painting") }}><a>Oil Painting</a></li>
                                <li onClick={() => { setSubCategory("Cartoon Drawing") }}><a>Cartoon Drawing</a></li>
                            </ul>
                        </div>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </div>
                        <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Price</span>
                        </div>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </div>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full " />
                    </label>
                    <div className="flex justify-start items-end p-0">
                        <div className="dropdown dropdown-right">
                            <div tabIndex={0} role="button" className="btn text-lg">Customization <SlArrowDown></SlArrowDown></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={() => { setCustomization("Yes") }}><a>Yes</a></li>
                                <li onClick={() => { setCustomization("No") }}><a>No</a></li>

                            </ul>
                        </div>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Processing Time</span>
                        </div>
                        <input type="text" placeholder="Processing Time" name="processingTime" className="input input-bordered w-full " />
                    </label>
                    <div className="flex justify-start items-end p-0">
                        <div className="dropdown dropdown-right">
                            <div tabIndex={0} role="button" className="btn text-lg">Stock Status <SlArrowDown></SlArrowDown></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={() => { setStockStatus("In Stock") }}><a>In Stock</a></li>
                                <li onClick={() => { setStockStatus("Made to Order") }}><a>Made to Order</a></li>

                            </ul>
                        </div>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Your Name</span>
                        </div>
                        <input type="text" placeholder="Your Name" name="userName" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Your Email</span>
                        </div>
                        <input type="text" placeholder="Your Email" name="userEmail" value={user.email} className="input input-bordered w-full " />
                    </label>
                    

                </div>
                <div className="text-xl text-center">
                    <input type="submit" value="Add Painting" className="bg-sky-100 px-6 py-4 font-semibold rounded-xl shadow-md mt-10" />
                </div>
            </form>



        </div>
    );
};

export default UpdateProfile;