import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [newUser , setNewUser] = useState("");
    const [newPhotoURL , setNewPhotoURL] = useState("");

    useEffect(() => {
        setNewUser(newUser || "");
        setNewPhotoURL(newPhotoURL || "");
    }, []);

    const handleSaveChanges = async () => {
        try {
            await updateProfile(user, { displayName: newUser, photoURL:newPhotoURL});
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to update profile. Please try again later.");
        }
    };

    return (
        <div className="bg-violet-200 py-12">
            <div className="mb-12 space-y-3 border-2 border-solid border-black md:mx-40 md:p-12 py-12 rounded-xl bg-violet-50">
              <h2 className="text-4xl font-semibold text-center mb-4">Current Details</h2>
              <img src={user.photoURL || "Image Not Found" } alt="" className="h-24 w-24 rounded-full flex items-center mb-8 ml-40 md:ml-96"/>
              <p className="text-lg text-center"><span className="text-lg font-medium ">Name : </span>{user.displayName}</p> 
              <p className="text-lg text-center"><span className="text-lg font-medium">Photo URL : </span>{user.photoURL}</p>
            </div>

            <div className="border-2 border-solid border-black md:mx-40 md:p-12 py-12 rounded-xl bg-purple-50">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <ToastContainer />
            <h2 className="text-4xl font-semibold text-center mb-4">Update Profile</h2>
            <div className="text-xl font-medium text-center my-6">
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    className="ml-6 border-2 border-solid border-black rounded-lg px-6 py-1"
                />
            </div>
            <div className="text-xl font-medium text-center my-6">
                <label>Photo URL:</label>
                <input
                    type="text"
                    value={newPhotoURL}
                    placeholder="Photo URL"
                    onChange={(e) => setNewPhotoURL(e.target.value)}
                    className="md:ml-6 border-2 border-solid border-black rounded-lg px-6 py-1"
                />
            </div>
            <div className="flex justify-center">
                <button className="btn bg-lime-200 md:w-96 text-2xl font-semibold md:px-4 " onClick={handleSaveChanges}>Save Changes</button>
            </div>
        </div>
        </div>
    );
};

export default UpdateProfile;
