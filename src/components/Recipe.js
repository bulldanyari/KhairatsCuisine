import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import PrintPage from "./PrintPage";
import {React,useRef} from "react";
import { useReactToPrint } from "react-to-print";

function Recipe(props){
    const contentRef = useRef();
    const reactToPrintFn = useReactToPrint({ contentRef });
    
    return (
        <div  className="fixed top-0 left-0 lg:w-full  lg:bg-black lg:bg-opacity-70 md:h-full lg:min-h-full lg:p-10">
          <div ref={contentRef} className="lg:w-11/12 md:w-full min-h-full bg-slate-100 lg:rounded-sm lg:mx-auto relative">
           <IoCloseCircleSharp onClick={props.toggle} className="absolute right-1 top-1 text-red-600 size-10 hover:text-red-950" />
        <div className="flex flex-row p-8">
           <div className="w-full">
            <img src={`${props.image}`} className="w-11/12 rounded-md border-4 border-slate-300  my-2" />
           </div>
           <div className="w-full">
            <h1 className="text-3xl mb-4 text-slate-900">{props.name}</h1>
            <p className="flex flex-row justify-between"><span>Prep Time:<br/> {props.prepTimeMinutes}mins</span> <span>Cook Time: <br/>{props.cookTimeMinutes}mins</span> <span>Servings:<br/> {props.servings} plates</span> <span>Cuisine: <br/>{props.cuisine}</span> <span>Calories per serving:<br/> {props.caloriesPerServing}cal</span> </p>
            <h3 className="text-lg mt-6">Ingredients:</h3>
            <ul>{props.ingredients.join(',')}</ul>
            <h3 className="mt-6 ">Cooking Instructions:</h3>
            <ul>{props.instructions.map(element=>(<li><FaCheckCircle className="inline mr-1" />{element}</li>))}</ul>
            <div className="mt-10"><PrintPage handle={reactToPrintFn} /></div>
           </div>
        </div>
        </div>
        </div>
    )
}
export default Recipe;