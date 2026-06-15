import React, { useState } from "react";
import { postdata } from "./api";

export default function CreateUsers(){

const[name,setname]=useState("");
const[status,setstatus]=useState("");
const[error,seterror]=useState("");

async function handlesubmit(e) {
    e.preventDefault();
    try{
        setstatus("LOADING...");
        seterror("");
        const newuser=await postdata("users",{name});
        setstatus(`User created with ID:${newuser.id}`);
    } catch(err){
        seterror(err.message);
        setstatus("");
    }
}

return(
    <div>
        <h2>CREATE USER</h2>
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                placeholder="ENTER NAME"
                value={name}
                onChange={(e)=>setname(e.targetvalue)}
            />
            <button type="submit">SUBMIT</button>
        </form>

        {status && <p>{status}</p>}
        {error && <p style={{color:"red"}}>Error:{error}</p>}
    </div>
);
}