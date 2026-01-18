import Title from './Title.jsx'
import Description from './Description';


function Header () {
    return (<div className = "text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
        <Title />
        <Description />
    </div>)
}

export default Header;