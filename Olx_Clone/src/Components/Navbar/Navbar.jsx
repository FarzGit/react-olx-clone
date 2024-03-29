import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import '../Navbar/navbar.css'
import { AuthContext } from "../../firebase/context";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

    const { user, setUser } = useContext(AuthContext)
    const Navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser(null)
            Navigate('/')
            window.alert("Logout successfully")
        }).catch((error) => {
            console.log(error);
            window.alert("not loged out something went wrong")
        })
    }

    return (
        <>
            <div className="mainNavBar h-[68px]  w-[100%] flex justify-between fixed z-10 " style={{ backgroundColor: '#EFF1F3' }}>
                <div className="flex items-center">
                    <img className="w-[65px]" src="olxLogo.png" alt="olxLogo" />
                </div>
                <div className="flex items-center max-md:hidden 2xl:w-[100%]">

                    <h3 className="p-1 2xl:w-[30%]  text-sm rounded-lg border-2 border-black bg-white w-[270px] h-[45px] flex items-center justify-between text-gray-400">
                        <CiSearch size={20} className="text-gray-500" />
                        Select Your Country
                        <RiArrowDropDownLine size={50} className="text-black" />
                    </h3>


                    <input className=" max-md:w-[200px] ml-1 2xl:w-[70%] xl:w-[650px]  h-[45px] p-2 text-sm rounded-tl-lg rounded-bl-lg border-2 bg-white border-black focus:outline-none  focus:border-blue-300" type="search" placeholder="Find Cars,Mobile Phones and more..."></input>


                    <button className=" searchIcon w-[40px] h-[45px] rounded-tr-lg rounded-br-lg flex items-center justify-center ">
                        <IoSearchSharp size={30} color="white" />
                    </button>




                </div>
                <div className="flex ">
                    <div className="flex items-center ">
                        <h3 className="pl-6 font-bold">
                            ENGLISH
                        </h3>
                        <h4 className="p-1 ">
                            <IoIosArrowDown size={30} />
                        </h4>
                    </div>
                    <div className="flex items-center p-4 font-medium">
                        {user ? (
                            <>
                                <span className="text-xs">{user.displayName}</span>

                                <button className="pl-3" value="logout" onClick={handleLogout}><MdOutlineLogout size={25} /></button>
                            </>


                        ) : (
                            <Link to="/Login" >Login</Link>
                        )}
                    </div>

                    <div className="flex items-center ">
                        <Link to="/addProduct" className="sellButton bg-white rounded-3xl w-[95px] h-[43px] flex items-center p-4">
                            <FaPlus />

                            SELL
                        </Link>
                    </div>

                </div>

            </div>
            <div className="h-[68px]"></div>

        </>
    )
}

export default Navbar