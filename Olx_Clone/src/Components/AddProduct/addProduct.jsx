import { FaArrowLeft } from "react-icons/fa";



function AddProduct() {

    return (
        <div className="flex items-center justify-center py-[30px] bg-slate-200 relative">

            <div className=" w-[50%] bg-slate-50 flex flex-col py-[50px] items-center rounded-lg justify-center relative " >
                <div className="absolute top-0 left-0 mt-2 mr-2 pl-2">
                    <button><FaArrowLeft /></button>
                </div>
                <h1 className="mt-3 font-medium">Sell Product</h1>
                <div className="flex flex-col w-[70%] mt-7">
                    <input className=" border-solid border border-black  rounded-md h-[34px] p-2 text-sm" placeholder="Product name" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Price" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Category" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Brand" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Location" />
                    <textarea className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Description"></textarea>
                    <span className="mt-2 text-xs">Image</span>
                    <input className=" border-solid border border-black  rounded-md h-[34px] px-1 py-[3px] text-sm" type="file" />

                </div>
                <button className=" text-white font-bold  w-[70%] rounded-lg mt-6 h-[34px]" style={{ backgroundColor: "#003034" }}>Create</button><br />
                <a className="text-sm underline cursor-pointer hover:text-blue-600">Login With Account</a>
            </div>

        </div>
    )

}

export default AddProduct