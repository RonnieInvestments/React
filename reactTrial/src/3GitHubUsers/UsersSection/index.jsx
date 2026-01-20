import SingleUserV2 from "./UserV2";
import Users from "./../users.json"


function UsersSection () {

    const user0 = Users[6];
    const user1 = Users[1];
    const user2 = Users[10];

    //console.log(user); 

    return (
        <div>
            <SingleUserV2 
            /* country = {"Kenya"}
            address = {"P.O BOX 1328, Kisii"}
            pet = {{name: "Blackie", type: "dog", breed: "German Shepherd"}}
            colors = {["black", "red", "blue", "green", "yellow"]} */

            avatar_url = {user0.avatar_url}
            login = {user0.login}
            url = {user0.html_url}
            />

            <SingleUserV2 
            avatar_url = {user1.avatar_url}
            login = {user1.login}
            url = {user1.html_url}
            />

            <SingleUserV2 
            avatar_url = {user2.avatar_url}
            login = {user2.login}
            url = {user2.html_url}
            />
        </div>
        
    )
}


export default UsersSection;