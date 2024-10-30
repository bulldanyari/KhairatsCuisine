import { FaStar } from "react-icons/fa";
import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import Recipe from "./Recipe";
export default function Card(props){

    const [popUp,setPopUp]=React.useState(false)
    
    function showRecipe(){
     setPopUp(prev=>!prev)
    }
    return (
        <>
        <div className="w-60 cursor-pointer bg-white rounded-sm shadow-sm shadow-gray-400" onClick={showRecipe}>
           <img src={`${props.image}`} />
           <div className="p-2">
           <p>{props.name}</p>
           <div className="flex flex-row justify-between m-1">
            <span>{`${props.caloriesPerServing} Cal`}</span>
            <div className="flex flex-row gap-x-1">
            <span><FaStar className="inline text-orange-600" />{props.rating}</span>
            <span><BiSolidUpvote className="inline" />{props.review}</span>
            </div>
            </div>
            </div> 
        </div>
        {popUp && <Recipe toggle={showRecipe} {...props} />}
        </>
    )
}