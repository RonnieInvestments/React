import SingleUserV2 from "./UserV2";
import Users from "./../users.json"



function UsersSection ({page}) {
    if (page !== "Users") {
        return null;
    }

    
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


export default UsersSection;