import { FaArrowLeft } from "react-icons/fa";

function SignUp() {



    return (
        <div className="flex items-center justify-center h-svh bg-slate-200 relative">

            <div className="h-[85%] w-[40%] bg-slate-50 flex flex-col items-center rounded-lg justify-center relative " >
                <div className="absolute top-0 left-0 mt-2 mr-2 pl-2">
                    <button><FaArrowLeft /></button>
                </div>
                <img className="w-[70px]" src="olxLogo.png" alt="" />
                <h1 className="mt-3 font-medium">Create An Account</h1>
                <div className="flex flex-col w-[70%] mt-7">
                    <input className=" border-solid border border-black  rounded-md h-[34px] p-2 text-sm" placeholder="Username" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Email" />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" placeholder="Password" />
                </div>
                <button className=" text-white font-bold  w-[70%] rounded-lg mt-6 h-[34px]" style={{ backgroundColor: "#003034" }}>Create</button><br />
                <a className="text-sm underline cursor-pointer hover:text-blue-600">Login With Account</a>
            </div>

        </div>
    )


}

export default SignUp