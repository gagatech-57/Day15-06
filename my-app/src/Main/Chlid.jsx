import React from "react";
const Child =React.memo(({sendmeassage})=>{
    console.log("Chlid Celled");
    return <button onClick={sendmeassage}>Call the Parend</button>
})
export default Child;