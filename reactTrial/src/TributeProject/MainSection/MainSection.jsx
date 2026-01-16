import GetFacts from './InformationSection/Facts.jsx'
import GetHistory from './InformationSection/History.jsx' 
import ImageSection from './Image.jsx'



function MainSection () {
    return (<div>
        <GetFacts />
        <GetHistory />
        <ImageSection />
    </div>)
}

export default MainSection