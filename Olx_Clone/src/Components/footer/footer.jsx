import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {


    return (
        <div className="flex justify-between mt-10 pr-[90px] pl-[90px] pb-[40px] pt-10" style={{ backgroundColor: "#EBEEEF" }}>

            <div>
                <h1 className="font-bold">POPULAR LOCATIONS</h1>

                <ul className="text-sm text-gray-400">
                    <li className="hover:text-black cursor-pointer">Kolkata</li>
                    <li className="hover:text-black cursor-pointer">Mumbai</li>
                    <li className="hover:text-black cursor-pointer">Chennai</li>
                    <li className="hover:text-black cursor-pointer">Pune</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold">TRENDING LOCATIONS</h1>

                <ul className="text-sm text-gray-400">
                    <li className="hover:text-black cursor-pointer">Bhubaneshwar</li>
                    <li className="hover:text-black cursor-pointer">Hyderabad</li>
                    <li className="hover:text-black cursor-pointer"> Chandigarh</li>
                    <li className="hover:text-black cursor-pointer"> Nashik</li>

                </ul>
            </div>
            <div>
                <h1 className="font-bold">ABOUT US</h1>
                <ul className="text-sm text-gray-400">
                    <li className="hover:text-black cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold">OLX</h1>
                <ul className="text-sm text-gray-400 ">
                    <li className="hover:text-black cursor-pointer">Help</li>
                    <li className="hover:text-black cursor-pointer">Sitemap</li>
                    <li className="hover:text-black cursor-pointer">Legal & Privacy information</li>
                    <li className="hover:text-black cursor-pointer">Vulnerability Disclosure Program</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold">FOLLOW US</h1>
                <div className="flex space-x-2 pt-5">
                    <FaFacebookF color="#557477" />
                    <FaInstagram color="#557477" />
                    <FaTwitter color="#557477" />
                    <FaYoutube color="#557477" />

                </div>

            </div>

        </div>
    )

}

export default Footer