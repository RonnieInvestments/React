// Hold the full application
import Header from './Header/Header.jsx'
import MainSection from './MainSection/MainSection.jsx';    

function App () {
    return (
    <div className = "min-h screen bg-gray-100 text-gray-800">
        <div className = "max-w 5xl mx-auto px-6 py-10">
        <Header />
        <MainSection />
        </div>
    </div>)
}

// Default EXport
export default App;