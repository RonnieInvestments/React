import SearchSection from "./SearchSection";
import UsersSection from "./UsersSection";
import StateNumbers from "./LearningSection/StateNumbers";
import Colors from "./Colors/index";

function App () {
    return (
        <div>
        <h1>GitHub Users</h1>
        <Colors />
        <StateNumbers />
        <SearchSection />
        <UsersSection/>
        </div>
    )
}



export default App;