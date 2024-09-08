
import React from 'react';
//import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
const heading = React.createElement("h1",{},"Hello World from React");
//{} attributes for the tags
//{id:"heading"} or can addd class names as well
const root  = ReactDOM.createRoot(document.getElementById('root'));



//when we do React.createElement it gives us a React Element which is not the tags yet
//When we do reactDom Renter method the render method converts the react element to DOM tree
//The React elemnt also has some predefined attributes and one of those attribute is called props 

//In case we have to create nested divs
const parent = React.createElement(
  "div",
  {heading:'parent'},
  React.createElement(
    "div",
    {heading:'child'},
    React.createElement('h1',{heading:'header1'},'React h1 Tag')))


//In case of sibling elements we can pass array of child tags
const parent2 = React.createElement(
  "div",
  {heading:'parent'},
  React.createElement(
    "div",
    {heading:'child'},
    [React.createElement('h1',{heading:'header1'},'React h1 Tag'),
      React.createElement('h2',{heading:'header2'},'React h2 Tag')
    ]))
    
    
//way too nested 
//we cannot go very scalable with the above codes and hence we eventually ahve to use React JSX 




//root.render(heading)
//root.render(parent)
root.render(parent2)   ///If root already has something then that will be replaced by this new render
