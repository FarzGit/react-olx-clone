
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import '../ProductDetails/productDetails.css'


function ProductDtails() {


    return (
        <>

            <div className="flex justify-center py-6 ">
                <div className="w-[50%] h-[600px] rounded-sm mt-2 ">
                    <div className="image h-[300px]" style={{ backgroundImage: 'url(shoe.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}>
                      
                    </div>
                    <div className="  w-[100%]  h-[300px] mt-3 border border-black rounded-md p-3">
                        <span className="font-bold text-xl">Details</span>
                        <div className="pb-3">
                            <span>Brand : Iphone</span>
                        </div>
                        <hr></hr>
                        <div className="pt-3">
                            <span className="font-bold text-lg ">Description</span><br></br>

                            <span>
                                We deal in all iphones models of iphones

                                awith great bargains

                                All iphone models are available with us

                                COD available courier charges will be applicable

                                Contact us now for best offers
                            </span>
                        </div>

                    </div>
                </div>
                <div className="w-[30%] h-[300px] ml-3 relative">
                    <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 relative">
                        <div className="h-[120px] relative">
                            <h1 className="font-bold text-2xl">&#8377; 230056</h1>
                            <span className="text-sm pt-5">Low Price Best Home Cinema Wifi Smart HD LED Projector USB HDMI SD AUX</span>
                            <div className="text-xs flex justify-between pt-5 relative">
                                <span>Samudrapur, Maharashtra, India</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 flex space-x-2 mt-3 mr-2">
                        <IoShareSocialOutline />
                        <FaRegHeart />
                    </div>

                    <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 mt-2">

                        <div className="flex ">
                            <span><FaRegUserCircle size={40} color="grey" /></span>
                            <span className="pl-2 pt-[5px]">User.com</span>

                        </div>
                        <span className="text-xs pt-2">Email : farzinahammedabc@gmail.com</span>

                        <button className=" mt-3  h-[40px] border border-black rounded-lg focus:border-black hover:border-2 hover:border-solid hover:border-black font-bold text-sm">Chat With Seller</button>

                    </div>
                    <div className="w-[100%] rounded-lg border-solid border border-black flex flex-col p-3 pb-7 mt-2">

                        <div>
                            <span className="font-bold text-lg">Posted In</span>
                        </div>

                        <span className="text-xs">Samudrapur, Maharashtra, India</span>

                    </div>
                </div>

            </div>





        </>
    )

}

export default ProductDtails


