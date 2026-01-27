import SingleUserV2 from "./UserV2";
import Users from "./../users.json"
import axios from "axios";

import { useEffect, useState } from "react";


function UsersSection ({page}) {
    const [users, setUsers] = useState([])

    if (page !== "Users") {
        return null;
    }

    const getUsers = async () => {
        try {
            let response = await axios ({
                url: "https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28",
                method: "GET",
            });
            console.log (response);
        
        } catch (e) {
            console.log ("Failed to get github users")
            console.log (e);
        } 

        useEffect (()=>{
            getUsers();
        }, [])
        //console.log(user);

    function toMap (item) {
        return (
            <SingleUserV2 
            key = {item.id}
            avatar_url = {item.avatar_url}
            url = {item.html_url}
            login = {item.login}
            />
        )
    }

    return (
        <div className="flex flex-wrap">{Users.map(toMap)}
        </div> 
        
    )
    }

}
export default UsersSection;