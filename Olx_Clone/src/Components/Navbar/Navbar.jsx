
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import '../Navbar/navbar.css'

function Navbar() {

    return (
        <div className="mainNavBar h-[68px]  w-[100%] flex" style={{ backgroundColor: '#EFF1F3' }}>
            <div className="flex items-center">
                <img className="w-[65px]" src="olxLogo.png" alt="olxLogo" />
            </div>
            <div className="flex items-center">
                <div>
                    <h3 className="p-1 text-sm rounded-lg border-2 border-black bg-white w-[240px] h-[45px] flex items-center justify-between text-gray-400">
                        <CiSearch size={20} className="text-gray-500" />
                        Select Your Country
                        <RiArrowDropDownLine size={50} className="text-black" />
                    </h3>

                </div>
                <div className="pl-2">
                    <input className="w-[650px] h-[45px] p-2 text-sm rounded-tl-lg rounded-bl-lg border-2 bg-white border-black focus:outline-none  focus:border-blue-300" type="search" placeholder="Find Cars,Mobile Phones and more..."></input>
                </div>

                <button className=" searchIcon w-[40px] h-[45px] rounded-tr-lg rounded-br-lg flex items-center justify-center ">
                    <IoSearchSharp size={30} color="white" />
                </button>

                <div className="flex items-center">
                    <h3 className="pl-6 font-bold">
                        ENGLISH
                    </h3>
                    <h4 className="p-1 ">
                        <IoIosArrowDown size={30} />
                    </h4>
                </div>


            </div>

            <div className=" flex items-center p-4 font-medium underline">
                <button >
                    Login
                </button>
            </div>

            <div className="flex items-center">
                <button className="sellButton bg-white rounded-3xl w-[95px] h-[43px] flex items-center p-4">
                    <FaPlus />

                    SELL
                </button>
            </div>
        </div>
    )
}

export default Navbar