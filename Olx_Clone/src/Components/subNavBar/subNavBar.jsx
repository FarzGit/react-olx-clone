import { IoIosArrowDown } from "react-icons/io";

function SubNavBar(){


    return(
        <div className="mainSubNavBar bg- h-[42px] flex border-t-2 border-b-2 max-md:hidden mt-1   border-gray-200">

            <div className="flex items-center pl-[25px]">
                <h3 className="font-bold text-sm">ALL CATEGORIES</h3>
                <h4 className="pl-3"><IoIosArrowDown size={30} /></h4>
            </div>

            <div className="flex items-center pl-[30px]  ">
                <ul className="flex space-x-3">
                    <li className="text-xs hover:text-blue-500 cursor-pointer">Cars</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">Motorcycles</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">Mobile Phones</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">For Sale: Houses & Apartments</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">Scooters</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">Commercial & Other Vehicles</li>
                    <li className="text-xs hover:text-blue-500 cursor-pointer">For Rent: Houses & Apartments</li>
                </ul>
            </div>

        </div>
    )

}

export default SubNavBar

