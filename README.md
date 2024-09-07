1. Browsers provide document and other DOM manipulation elements
2. Get React from CDN and can be added as script tag after body Tag
3. <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> -> React Core Library
4. <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
   -> React for DOM Manipulation
5. we can split the React Script tags and write all script in the js file and put a ref in the html like in 1.react
   <------------Basic------------>
6. Most costly operation in web browser is the DOM operations
7. React.create gives us react element which is an object, so when we do React.create we get react element which is an object and not an html element.
8. this object has lot of attributes and key value pair and has something called props.
9. when we do Root.render -> take react element and put it in the html format and display in the browser.

   <---------------------------Nested Dom---------------------->

10. React.createElement creates an element but if in case we want sibling or child in that case the thrird argument to be passed inside should be single Create Element or Array of Create Elements.
11. Eventually the code will be come huge and hence we have to use JSX to have better appreach to React and handling things better way.
12. Thus, React caode can be written without JSX but the only drawback is its not scalable
13. React is also called library as it can run in a small section like here in root while rest of the thing will have default behaviour, small portaion of web site can also be used that way.
14. It is set of helper functions taht helps the development.
