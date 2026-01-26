import { useEffect } from "react";


function SingeleUserV2 (props) {
    /*
    use effect - takes two parameters (function, dependency array)
    */

    useEffect (()=>{
        console.log ("Component mounted");
        console.log ("Use effect has run");
    }, []);

    // Check when a component is unmounted or dead

    useEffect (()=>{
        console.log ("I am now dead");
    }, []); 

    // console.log("Props are", props);
    const navigate = () => {
        console.log ("Navigate to url ", props.url);
        window.open (props.url, "_blank");
    }

    // onClick
    /* function mouseOverCB (){
        console.log ("Mouse over ", props.login)
    } */

    return (
        <div className= "m-2 rounded-md shadow-md">
            <div className= "rounded-md">
                <img className= "rounded-md" src = {props.avatar_url} />
            </div>
            <div className = "p-4">
                <div>
                    Name <b>{props.login}</b>
                </div>
                <button
                    onClick = {navigate}
                    className = "px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active:opacity-50">
                        GitHub
                </button>
            </div>
        </div>
    )
    

}

export default SingeleUserV2;

 