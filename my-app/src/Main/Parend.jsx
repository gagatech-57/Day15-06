import React,{useCallback,useState} from "react";
import Chlid from "./Chlid"
function Parend(){
    const [conut,setcount]=useState(0);
    const sendmeassage=useCallback(()=>{
        alert("Hello Im Your parend ...!");
    console.log("Hello Im Your parend ...!");
    },[]
);
return(
    <div>
        <Chlid sendmeassage={sendmeassage} />
    </div>
)
}
export default Parend;