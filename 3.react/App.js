
import React from 'react';
import ReactDOM from 'react-dom/client'

//Basic React Element
const heading = React.createElement(
  "h1",
  {
  id:"heading"},
  "non jsx Tag"
);

console.log(heading)

//JSX-> Babel Converts the below JSX to React.createElement
const jsxHeading  = <h1 className='jsx-heading'>JSX Heading</h1>
const multijsxHeading = (<h1 
  className='jsx-heading'>
  JSX MultiLine Heading</h1>)

console.log(jsxHeading);


//Components -> React Component 
//Functional Component -> Function which returns a React Element
const HeadingComponent = ()=>{
  return (<h1
    className='jsx-heading'>
    Multi Line Functional Component with return
  </h1>)
} 


const HeadingShortComponent = ()=>
  (<h1
    className='jsx-heading'>
    Multi Line Functional Component
  </h1>)




//Component Composition
const TitleComponent = ()=>
   (<h2
    className='jsx-heading'>
    This is from Title Component witout return statement
  </h2>)

const reactElement = <h4>This is Basic React Element from JSX</h4>  

const num = 1000;
const MainComponent = ()=> {
  return (
   <div>
      {console.log('Main Component')}
      {reactElement}
      <h1
      className='jsx-heading'>This is the Main Component with retrun statement
      </h1>
      <h5>This is use of a component inside a component and its called Component Composition</h5>
      <TitleComponent/>
   </div> 
   )
}  





const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<HeadingComponent/>);
//root.render(<HeadingComponent></HeadingComponent>);
root.render(<MainComponent/>)