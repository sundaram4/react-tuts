//1-What is react

//a tree like structure is created DOM
// from html files and javascript is used to manipulate it
// Vanilla Javascript code to hide an element

const btn = document.querySelector('#btn');
btn?.addEventListener('click',()=>{
    const div = document.querySelector('#div');
    div.style.display='none';
});
//As the application grows the code can be a
//challenge to modify and add new changes

//in react we divide the page into small and reusable 
// component and efficiently creating a dom element

//Components help us write reusuable,modular, and
//better organised code

// A react app application is the tree of components
// with App component as the root and other component 
//coming under it

//2- Create a react app
// Create React App(CRA)
// Vite ---> npm create vite@version/latest press enter
// name of react app, framework, Language

//Now run 
//cd react-app   
//npm install 
//npm run dev

//in Index.html we have 
<body>
    <div id ="root"></div>
    //entry point for our application
    <script type="module" src='/src/main.isx'></script>
</body>
   
//3- creating a React Component a-class component b-function component

//Meassage is wriiten in PascalCasing
function Message() {
    //return a JSX
    //JSX:JavaScript XML
    const name ='Mosh';
    if(name)
        return<h1>Hello {namee}</h1>;
    return <h1>Hello World</h1>;
}
export  {Message};

function App(){
    return <div><Message/></div>;
}
export { App};

//once we make a change in message component react uses virtual dom
//and compare changes and updated the virtual dom h1 element and then 
//updates the real dom with the corresponding element

//4 - Library vs Framework
// React is a Library:A tool that provides specific functionality
// Angular , Vue is a framework: set of tools and guidelines for 
//building apps

//5 - creating a basic ListGroup Component
//ListGroup.tsx


//Fragment --- 
return(
    <>
        <h1></h1> 
    </>
);




