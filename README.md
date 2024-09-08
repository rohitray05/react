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

<-----------------Ingine App------------------------------>  
15. npm is not offially apprebiated as Node Package Manager  
16. npm init to have npm installed in the  
17. package.json is the npm configuration 18. We will start having packages installed: We are doing this clean without skafolding

        1. Bundler: npm install -D parcel
        There are two types of dependencies, dev and normal -> dev is for development process -D is dev dependencies.
        2. Caret(^) and tilde(~) : If caret is present and new version is comes in minor version update, the package will update automatically but if its ~ tilda then only major updates will be installed automatically. Advides to put ^ caret and not tilde.
        3. package-lock.json:  keeps track of exact version, it has something called "integrity", which keeps a sha- characted for same as local version.
        4. node_modules-> has transitive dependencies.
        5. package and package-lock can be pushed but not node_modules
        6. Igniting the parcel and let the parcel host html to a portal
        7. npx parcel index.html -> npx is executing package
        8. pracel does lot of things
        9. Now cdn links are not the best way to import React, best way is have it as npm dependency.
        10 when we do impor React and ReactDom in our script file, the script tag written in the html will treat the app.js as normal js file and import is not normal js, now once we import something in our js file it will become as module and hence we have to use the app.js file as module in the script tag written in html.  <script  type="module" src="./app.js"></script>
        11. Parcel does few more things:
           - Dev Build
           - Local Server
           - HMR = Hot module Replacement -> whenever we save the parcel updates the build and browser
           - uses an algorithm called: File Watching Algorithm (written in C++, keeps an eye of change)
           - image optimization
           - Minificaton (prod)
           - Bundling
           - Compressing
           - Consistent Hashing (huge topic)
           - Code Splitting
           - Differential Bundling - to run apps in older browsers
           - Error Handling
           - can host app in https
           - Tree Shaking - remove unused code
           - Different dev and prod bundles
           - "main": "index.js" -> if we do npx build index.html will give error, and have to remove this
             package.json has main entry form and it says index.js
           - browserslist configuration done on package.json and can take help of "https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z"
