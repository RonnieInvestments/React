function SingleUser () {

    const user = {

        "login": "pjhyett",
        "id": 3,
        "node_id": "MDQ6VXNlcjM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pjhyett",
        "html_url": "https://github.com/pjhyett",
        "followers_url": "https://api.github.com/users/pjhyett/followers",
        "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
        "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
        "organizations_url": "https://api.github.com/users/pjhyett/orgs",
        "repos_url": "https://api.github.com/users/pjhyett/repos",
        "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pjhyett/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false

  };

 /*

  - you can only render primitive values
        let myName = "Ronaldo Nyakwama";
        let age = 26;
        let lovesFootball = true;

  - before you display data, ensure you can read the data
        console.log (user); returns the full object

        console.log (user.avatar_url); -Access data
 
 */

        /*
        
        reading and accessing data

        console.log(user.avatar_url); // Image source
        console.log(user.login); // Login username
        console.log(user.html_url) // HTML url 
        
        */


  return (
    <div>
        <div>
            <img src = {user.avatar_url}/>
        </div>
        <ul>
            <li>
                Name <b>{user.login}</b>
            </li>
            <li>
                Url <b>{user.html_url}</b>
            </li>
        </ul>
    </div>
  )

}

export default SingleUser;