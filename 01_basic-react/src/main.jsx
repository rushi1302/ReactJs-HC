import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// can I make function here and render - lets see

function MyFunction (){
  return(
    <h3>The champ is here</h3>
  )
}
// If react converts all function as a object what if I direct pass the object - will it run

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit the google.'

// }
// it wont run - beacuse we have made our custom obj where name of keys will not match - this is 
// not only reason so what we can do we can write like this
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
// can I directly execute the MyFunction() - yes you can

//  but the question is still how react converts function jsx into obj 

const userName = 'Rushikesh'
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com',
        target: '_blank'},
  'click me to visit google',
  userName
)

// this is how react creates its own object - 
// 1. it uses its own React.create method to create an element
// 2. createElement function takes parameters - type of dom , properties object , text
// 3 the variable is added directly by its name after text
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // MyFunction()
  // AnotherElement
  reactElement 
  
)
