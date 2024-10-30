import { TfiPrinter } from "react-icons/tfi";


function PrintPage(props){
    return(
        <div onClick={props.handle}>
            <TfiPrinter className="text-4xl hover:cursor-pointer hover:text-green-900"/>
        </div>
      
    )
}
export default PrintPage;