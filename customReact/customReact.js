// import { createElement } from "react";

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    // lets optimize the code - in above code we adding the attribute one by one and this is not a right approach

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit the google.'

}

const paraElement = {
    type: 'p',
    props: {
        class: 'rushi'
    },
    children: 'This is Rushikesh'

}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)
customRender(paraElement, mainContainer)