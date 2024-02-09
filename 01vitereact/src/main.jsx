import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


const  anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

  // reactElement
  // anotherElement
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
