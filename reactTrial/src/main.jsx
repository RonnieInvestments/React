import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './TributeProjectNamedExports/App.jsx'
import './index.css'


// React components (Small sections of user interface - UI): function 
// Function: <html, css, and js

// Rules for creating components
/*
  
  - name of the function(component) should start with a capital letter
  - the function should return null or valid HTML<jsx>
  - valid HTML should only return a single HTML element
  - if you want to return multiple elements, you use a react fragment: <></>

*/

/*

Rules exercise 
  - create a component with the name about me
  - have the component return null
  - have the component return div<with your name>
  - how to render a component
    rename the component with small letter
    (break rule and observation)
    return nothing 
    return invalid jsx, eg, garbage
    return multiple HTML elements

*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
