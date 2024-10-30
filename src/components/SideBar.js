import { IoMdHome,IoIosSettings } from "react-icons/io";
import { MdSunny,MdDarkMode } from "react-icons/md";
import { WiSunrise } from "react-icons/wi";
import { RiContactsFill,RiLuggageCartFill } from "react-icons/ri";

export default function SideBar(props){
    
    return(
        <div className="fixed bg-gray-800 shadow-sm shadow-gray-500 text-gray-300 min-h-screen lg:w-fit md:w-3/12 font-sans">
            <h1 className="my-10 p-5 text-center font-semibold drop-shadow-md text-nowrap">Khairat's Cuisine</h1>
            <div className="py-10  w-full h-full">
            <ul className="mb-8 w-full">
                <li className="hover:bg-gray-900 px-5 py-1"><button onClick={props.handle} value="Home"><IoMdHome className="inline mr-2 text-green-600" />Home</button></li>
                <li className="hover:bg-gray-900 px-5 py-1"><button onClick={props.handle} value="Breakfast"><WiSunrise className="inline mr-2 text-red-500" />Breakfast</button></li>
                <li className="hover:bg-gray-900 px-5 py-1" ><button onClick={props.handle} value="Lunch"><MdSunny   className="inline mr-2 text-yellow-600" />Lunch</button></li>
                <li className="hover:bg-gray-900 px-5 py-1"><button onClick={props.handle} value="Dinner"><MdDarkMode className="inline mr-2 text-purple-600" />Dinner</button></li>
            </ul>
            <ul>
                <li className="hover:bg-gray-900 px-5 py-1"><RiLuggageCartFill className="inline mr-2 text-orange-400" />Orders</li>
                <li className="hover:bg-gray-900 px-5 py-1"><IoIosSettings className="inline mr-2 text-purple-500"/>Settings</li>
                <li className="hover:bg-gray-900 px-5 py-1"><RiContactsFill className="inline mr-2 text-cyan-400" />Profile</li>
            </ul>
            </div>
        </div>
    );
}
