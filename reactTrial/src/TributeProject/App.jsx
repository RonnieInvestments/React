// Hold the full application
import Header from './Header/Header.jsx'
import MainSection from './MainSection/MainSection.jsx';    

function App () {
    return (
    <div className = "p-4 w-screen h-screen bg-gray-100">
        <Header />
        <MainSection />
    </div>)
}

// Default EXport
export default App;