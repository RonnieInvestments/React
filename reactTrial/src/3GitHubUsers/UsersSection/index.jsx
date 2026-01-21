import SingleUserV2 from "./UserV2";
import Users from "./../users.json"
import SingeleUserV2 from "./UserV2";


function UsersSection () {
    function toMap (item, index) {
        return (
            <SingeleUserV2 
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