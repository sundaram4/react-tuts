React is a library for building user interfaces

JSX expression
const heading = <h1>Mozilla Developer Network</h1>;
This heading constant is known as a JSX expression. 
React can use it to render that <h1> tag in our app.

const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);

Browser can't read JSX without help. When compiled (using a tool like Babel)
our header expression would look like this:

const header = React.createElement("header",null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
JSX is a blend of HTML and JavaScript

The public directory contains files that will be read by your browser while you're developing the app; 
the most important of these is index.html. 
React injects your code into this file so that your browser can run it

The public directory will also be published when you build and deploy a production version of your app
Deploying our app:
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment

The package.json file contains information about our project that Node.js/npm uses to keep it organized. 
This file is not unique to React applications; create-react-app merely populates it.

Component is a reusable module that renders a part of our app
They serve a single, obvious purpose.

React components use PascalCase variable names, like HelloWorld
The statement export default App makes our App component available to other modules.

Component props
A prop is any data passed into a React component. 
In React, dataflow is unidirectional:
props can only be passed from Parent components down to Child components; and props are read-only.


To import bootstrap into the main componenet
import 'bootstrap/dist/css/bootstrap.css'

//Rendering List
items.map(item => <li>{item}</li>)

const Component = () => {
  const items = ['a','b','c'];
  return(
    <ul>
      {items.map((items) => (
          <li key="item">{item}</li>
        ))}
    </ul>
  );
};


//Conditional Rendering
let items = ['a','b','c'];
//cannot reassign a value to const variable
items=[];
if(items.length === 0)
  return <p>No item found</p>

or it can also be written as
{items.length ===0 ? <p>No item</p> : null}
or
{items.length === 0 && <p>No item</p>}


//Handling Events -- click events in a component
In React each element has a property(prop) called onClick 
  <ul>
    {items.map((items, index) => (
        <li 
          className="list-group-item" 
          key={item}
          onClick = {() => console.log("clicked")}
        >
          {item}
        </li>
      ))}
  </ul>

  //for logging the clicked item 
  //we can also pass second parameter index and we 
  //can see the index of the parameter that was clicked
  
  onClick = {() => console.log(item,index)}
  ()-- inside this we can occasionally have event
  onClick= {(event) => console.log(event)}
  //the type of the event is a synthetic based event
  //wrapper around native browser event . Each browser has its own event
  
  // Event handler --> handleClick
  const handleClick = (event:MouseEvent) => console.log(event);

  onClick= {handleClick} // we just have to pass reference
  //you can get a error if type annotation is not as Ts compiler does not 
  //know the type of event 


//Managing State
  const arr = useState(-1);
  arr[0]// variable
  arr[1] // updater function
  or define it a destructured manner
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //this is how we tell react that state may change over time
  <ul>
    {items.map((items, index) => (
      <li 
        className= {
          selectedIndex === index 
          ? "list-group-item active" 
          : "list-group-item" } 
        key= {item}
        onClick ={() => {setSelectedIndex(index)}}
      >
      {item}
    ))}
  </ul>
  
//passing Data via props --> can be used to pass data to componennts
  using an interface we can define the shape or
  interface of an object
  // {items: [], heading:string}
  interface Props{
      items:string[];//using type annotation 
      heading: string; //to define the various type of properties
  }

  function App() {
    let items = ["a","b","c"];
    return(
      <div><ListGroup items={items} heading="Cities" /></div>
    )
  }

  function ListGroup({items, heading}:Props) { 
    //props is of type Interface Props
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return(
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item</p>}
        <ul>
          {items.map((items, index) => (
              <li 
                className= {
                  selectedIndex === index 
                  ? "list-group-item active" 
                  : "list-group-item" } 
                key= {item}
                onClick ={() => {setSelectedIndex(index)}}
              >
              {items}
          ))}
        </ul>
      </>
    )
  } 


//passing function via props
  function App() {
    let items = ["a","b","c"];
    const handleSelectItem = (item:string) => {
      console.log(item);
    }
    return(
      <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
    )
  }

  interface Props{
      items: string[];//using type annotation 
      heading: string; //to define the various type of properties
      onSelectItem: (item:string) => void; // we are defining a functn  (item:string) => return void 
  }

  function ListGroup({items, heading, onSelectItem}:Props) { 
    //props is of type Interface Props
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return(
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item</p>}
        <ul>
          {items.map((items, index) => (
              <li 
                className= {
                  selectedIndex === index 
                  ? "list-group-item active" 
                  : "list-group-item" } 
                key= {item}
                onClick ={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
              >
              {items}
          ))}
        </ul>
      </>
    )
  } 


//state vs props
  props -- input(arguments) passed to a component
          similar to function args 
          immutable(unchangeable)

  state -- Data(Internal) managed by a component
          Similar to local variables
          Mutable
  similarity : anytime they both change , it will cause the dom to re render


//passing children
  imort {ReactNode} from "react";

  interface Props { // we caan give any name to : Props ---> AlertProps
    children : ReactNode;
  }

  const Alert = ({children}: Props) => {
    return (
      <div className="aler alert-primary">{children}</div>
    )
  }

  function App() {
    return (
      <div>
          <Alert>
            Hello <span>World</span>
          </Alert>
      </div>
    )
  }


//Excercise building a Button Component

  interface ButtonProps{
    children:string;
    //color?: string; // meaning this property is optional
    color? : "primary" | "Secondary" | "danger"; // using union operator we add different colors
              // with this implementation we can only set the value of color to any one of the 3 value
    onClick: () => void;
  }

  function Button ({children, onClick, color="primary"}: Props) {
    return (
      <button className={"btn btn-" + color} onClick = {onClick}>{children}</button>
    )
  }

  function App() {
    return (
      <div>
          <Button color="primary" onClick={() => console.log('clicked')}>My Button</Button>
      </div>
    )
  }


```
// Excercise showing an Alert 
  imort {ReactNode} from "react";

  interface Props { // we caan give any name to : Props ---> AlertProps
    children : ReactNode;
    onClose : () => void;
  }
  const Alert = ({children, onClose}: Props) => {
    return (
      <div className="aler alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismissible="alert"/>
      </div>
    )
  }

  function App() {
    const [alertVisible, setAlertVisiblity] = useState(false);


    return (
      <div>
        { alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>}
          <Button color="primary" onClick={() => setAlertVisiblity(true)}>My Button</Button>
      </div>
    )
  }
  //My Button and My Alert will be received in the children property of type string 
  interface ButtonProps{
    children:string;
  }
```

Managing Component State
  // understanding the State Hook
    # React updates state asynchronously(meaning: not immediately).
      --- for performance reason react takes all of state update and patches them at a later time
    # State is stored outside of components
      -- react keeps the state in the memory for as long as the component is active 
    # Use hooks at the top level of your component  


