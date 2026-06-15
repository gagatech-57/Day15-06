import React, { useEffect, useState } from "react";
import { getdata } from "./api";

export default function GetUsers() {
    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        async function fetchusers() {
            try {
                setloading(true);
                seterror("");
                const data = await getdata("users");
                setusers(data);
            }
            catch (err) {
                seterror(err.message);
            }
            finally {
                setloading(false);
            }
        }
        fetchusers();
    }, []); //runs only once

    if (loading) return <p>LOADING USERS...</p>;
    if (error) return <p style={{ color: "red" }}>ERROR:{error}</p>;

    return (
        <div>
            <h2>USERS LIST</h2>

            {users.map((u) => (
                <div key={u.id}>
                    <h3>{u.name}</h3>
                    <p>{u.email}</p>
                </div>
            ))}
        </div>
    );
}