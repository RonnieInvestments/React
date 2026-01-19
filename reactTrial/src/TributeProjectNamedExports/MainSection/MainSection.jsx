import GetFacts from './InformationSection/Facts.jsx'
import GetHistory from './InformationSection/History.jsx' 
import ImageSection from './Image.jsx'



function MainSection () {
    return (<div className = "grid grid-cols-1 md:grid-cols-3 gap 8 overflow-y-auto">
        <GetHistory />
        <GetFacts />
        <ImageSection />
    </div>)
}

export default MainSection