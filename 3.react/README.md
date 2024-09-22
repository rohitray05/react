# React and JSX are different, we can create React apps without JSX , JSX makes the developer work easy in all sense.

# JSX is HTML like syntax

# jsx and object from React.CreateElement is almost same and better way to write React

- Parcel gives the JSX code to Babel and it is trasnpiling the code
- JSX is converted to React Element by Babel and then to HTML or browser known language
- all the attributes have to have camelCase be it className or tabindex
- multiple line of jsx requires ()

# Everything in React is a component

- Class based Components -old way
- Functional Components -new way
  - Functional component can be written without return statement as well
  - const FunctionalComponent = () => (write any lines of html like code and it will work)
  - const FunctionalComponent = () => {return (write any lines of html like code and it will also work with return)}
  - Rendering React Element is just the name inside render function, root.render(reactElement), but with Functional Components we do it slightly differently root.render(<FunctionalComponent/>);
  - we can also have nested functional component and we can write <div><ChildFunctionalComponent/></div>
  - Component Composition is a way when we render a component inside another component.
  - Normal function(){} can also be used and not just arrow function.

# In jsx if we use the {} normal curly braces we can execute any JS expression inside the curly braces and the {} can be written inside any Functional Component.

- {} will help rendering JS code and also a React Element but if we want to render a Functional Component then we have to use <> angle brackets to display
- {} for React Elemnt and JS expressions
- <> for functional Component rendering

# JSX sanitizes the data in case of {} and prevents Cross Site Scripting attack

# {AnyFunctionalComponent()} -> we can use the curly braces to execute any Functional Component rather than putting it in <AnyFunctionalComponent/>

All below rendering options are ways to display and use Functional Components

- <AnyFunctionalComponent/>
- <AnyFunctionalComponent></AnyFunctionalComponent>
- {AnyFunctionalComponent()}
