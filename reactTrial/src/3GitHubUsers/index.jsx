import SearchSection from "./SearchSection";
import UsersSection from "./UsersSection";
import Navigation from "./Navigation";
import { useState } from "react";


function App () {
    const [page, setPage] = useState ("Users");
    console.log (page);
    return (
        <div>
        <h1>GitHub Users</h1>
        <Navigation setPage = {setPage}/>
        <SearchSection page = {page}/>
        <UsersSection page = {page}/>
        </div>
    )
}



export default App;