
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import '../ProductDetails/productDetails.css'
import Navbar from "../Navbar/Navbar";
import SubNavBar from "../subNavBar/subNavBar";
import Footer from "../footer/footer";
import { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { postContext } from "../../firebase/postContext";
import { useLocation } from "react-router-dom";



function ProductDtails() {
    const { state } = useLocation()
    const { obj } = state;
    console.log('obj :', obj)
    const { postDetails } = useContext(postContext)
    const userCollectionRef = collection(db, 'Users')
    const [users, setUsers] = useState([])

    console.log('users:', users)


    useEffect(() => {
        const fetchData = async () => {
            try {

                if (obj && obj.userId) {
                    console.log('entered into')
                    const details = query(userCollectionRef, where('userId', '==', obj.userId))
                    console.log('details: ', details)
                    const snapshot = await getDocs(details)
                    console.log('user', snapshot)

                    setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                }


            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])

    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }


    return (
        <>

            <Navbar />
            <SubNavBar />
            {obj ? (


                <div className="flex justify-center py-6 ">
                    <div className="w-[50%] h-[600px] rounded-sm mt-2 ">
                        <div className="image h-[300px]" style={{ backgroundImage: `url(${obj.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}>

                        </div>
                        <div className="  w-[100%]  h-[300px] mt-3 border border-black rounded-md p-3">
                            <span className="font-bold text-xl">Details</span>
                            <div className="pb-3">
                                <span>Brand :{obj.brand}</span>
                            </div>
                            <hr></hr>
                            <div className="pt-3">
                                <span className="font-bold text-lg ">Description</span><br></br>

                                <span>
                                    {obj.description}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="w-[30%] h-[300px] ml-3 relative">
                        <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 relative">
                            <div className="h-[120px] relative">
                                <h1 className="font-bold text-2xl">&#8377; {obj.price}</h1>
                                <span className="text-sm pt-5">{obj.description}</span>
                                <div className="text-xs flex justify-between pt-5 relative">
                                    <span>{obj.description}</span>
                                    <span>{formatDate(obj.date)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 flex space-x-2 mt-3 mr-2">
                            <IoShareSocialOutline />
                            <FaRegHeart />
                        </div>

                        {/* <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 mt-2">

                            <div className="flex" >
                                <span><FaRegUserCircle size={40} color="grey" /></span>
                                <span className="pl-2 pt-[5px]">user.name</span>
                            </div>
                            <span className="text-xs pt-2">Email: user.email</span>




                        </div> */}
                        <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 mt-2">

                            <div>
                                <span className="font-bold text-lg">Posted In</span>
                            </div>

                            <span className="text-xs">{obj.location}</span>

                        </div>
                    </div>

                </div>


            ) : (
                <h1>No products</h1>
            )}


            <Footer />

        </>
    )

}

export default ProductDtails


