import SearchSection from "./SearchSection";
import UsersSection from "./UsersSection";
import StateNumbers from "./LearningSection/StateNumbers";

function App () {
    return (
        <div>
        <h1>GitHub Users</h1>
        <StateNumbers />
        <SearchSection />
        <UsersSection/>
        </div>
    )
}



export default App;