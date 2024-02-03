import { FaRegHeart } from "react-icons/fa";

function Products() {

    return (
        // <div className="productsMain  h-[500px] ml-[40px] mr-[40px] pl-[24px] pr-[24px]" >

        //     <div className="productsTitle pt-2 font-medium text-lg">
        //         <h2>Fresh recommendations</h2>
        //     </div>
            // <div className=" w-[100%] ">

               

                <div className=" relative border-2 w-[270px] h-[265px] mt-4  ml-2 ">

                    <div className="absolute top-0 right-0 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center mt-1 mr-1 " >
                        <FaRegHeart size={20} />
                    </div>



                    <div className="h-[180px] pt-[2px] pl-[2px] pr-[2px] ">
                        <img className="h-[180px] w-[270px] " src="shoe.png" alt="" />
                    </div>

                    <div className=" pt-2 pl-3 pr-3 ">
                        <span className="font-bold">&#8377; 58999.00</span><br />
                        <p className="font-medium text-gray-500 text-sm">Nike Air Ultra</p>
                    </div>
                    <div className="text-xs pl-3 pr-3 pt-1 flex justify-between">
                        <span>kerala,calicut</span>
                        <span>Jun 26</span>
                    </div>
                </div>


            // </div>


        // </div>
    )

}

export default Products




















