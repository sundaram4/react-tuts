React is a library for building user interfaces

JSX expression
```
const heading = <h1>Mozilla Developer Network</h1>;
```
This heading constant is known as a JSX expression. 
React can use it to render the h1 tag in our app.
``` 
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```
Browser can't read JSX without help. When compiled (using a tool like Babel)
our header expression would look like this:
``` javascript
const header = React.createElement("header",null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```
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

Rendering List  
``` javascript
import 'bootstrap/dist/css/bootstrap.css' //To import bootstrap into the main componenet

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
```

Conditional Rendering
``` javascript
let items = ['a','b','c'];
//cannot reassign a value to const variable
items=[];
if(items.length === 0)
  return <p>No item found</p>

or it can also be written as
{items.length ===0 ? <p>No item</p> : null}
or
{items.length === 0 && <p>No item</p>}
```

Handling Events  
``` javascript
  -- click events in a component  
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
```    
``` javascript  
  while logging the clicked item   
  we can also pass second parameter index and we   
  can see the index of the parameter that was clicked  
  onClick = {() => console.log(item,index)}
  ()-- inside this we can occasionally have event
  onClick= {(event) => console.log(event)}
  the type of the event is a synthetic based event  
  wrapper around native browser event . Each browser has its own event
```
  
Event handler
```
  const handleClick = (event:MouseEvent) => console.log(event);
  onClick= {handleClick} // we just have to pass reference

  you can get a error if type annotation is not as Ts compiler does not   
  know the type of event
```


Managing State
``` javascript
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
 ``` 
Passing Data via props 
``` javascript
  can be used to pass data to componennts
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
```

Passing function via props
``` javascript
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
```  
state vs props  
```
  props -- input(arguments) passed to a component
          similar to function args 
          immutable(unchangeable)

  state -- Data(Internal) managed by a component
          Similar to local variables
          Mutable
  similarity : anytime they both change , it will cause the dom to re render  
```  
Passing Children  
``` javascript
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
```

Excercise building a Button Component
``` javascript
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

Excercise showing an Alert
``` javascript
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
```
  // understanding the State Hook
    # React updates state asynchronously(meaning: not immediately).
      --- for performance reason react takes all of state update and patches them at a later time
    # State is stored outside of components
      -- react keeps the state in the memory for as long as the component is active 
    # Use hooks at the top level of your component  
```
Choosing the state structure  
```javascript
  function app(){
    //const [firstName , setFirstName] = useState('')
    //const [lastName , setLastName] = useState('')
    //rather than defining two different state variables we can go for
    const [person, setPerson] = useState({
      firstName:'',
      lastName:''
    });
    const [person, setPerson] = useState({
      firstName:'',
      lastName:'',
      contact : {
        address: {
          street:''
        }
      }
    });
    avoid redundant state variables ---> like fullnames which can be computed
    group realted variables inside an object --> person
    avoid deeply nested structure  --> go for a flat strucure 
  }
```

Keeping Components Pure  
``` javascript
  /*Pure Function 
    Given the same input, always returns the same result /
  
  /*React is designed around this concept:
    props ------> Component --------> JSX 
    same props   skip re-rendering   return same jsx*/
  //every component should be a pure function
  //to keep components pure keep changes out of the render phase
  const Message = () => {
    let count = 0;
    count ++;
    return <div>{count}</div>
  }
  export default Message

  function app(){
    return(
      <>
        <Message/>
        <Message/>
        <Message/>
      </>
    )
  }  
  o/p : 1 1 1 but 
  //if we store count outside 
  let count = 0;
  const Message = () => {
    count ++;
    return <div>{count}</div>
  }
  //o/p : 2 4 6 this shows to keep change out of render phase
  //however even if we make changes inside the render phase it is totally fine

```


Understanding the Strict Mode  
```
  in development mode Strict mode is enabled --> react renders each component twice
  and this is done for various reasons and 
  one of them is to check for impure components

  now we saw the output as 2 4 6

  so count value for 1 3 5 was used by strict mode to check for any 
  potential issues so the message component was rendered 6 timmes and we 
  got the value for the second run

  Message : 1 left out   Message : 2
  
  Message : 3 l/o  Message : 4
  
  Message : 5 l/o  Message : 6

  let count = 0;
  const Message = () => {
    console.log('Message called', count)
    count ++;
    return <div>{count}</div>
  }

  o/p on console 
    Message called 0
    Message called 1 

  In product mode the strict mode is not enabled and component is rendered once
```

Updating Objects
``` javascript
  function app(){
    const [drink, setDrink ] = useState({
      title: "Americano",
      price:5,
    });
    const handleClick = () {
      drink.price = 6;
      setDrink(drink);
    }
    return(
      <div>
        {drink.price}
        <button onClick= {handleClick}>Click me </button>
      </div>
    )
  }  
  // o/p: 5 Click me ,there is no change in the value of price

  //to tell react about state updates , we have to give a brand new object
  const handleClick = () {
    const newDrink = {
      title: drink.title,
      price: 6
    }
    setDrink(newDrink);
  };
  //so just like props we have to treat state object as immutable
  
  //what if the objects had various properties
  const newDrink = {
    ...drink,
    price: 6
  }
  setDrink(newDrink);
  //or 
  setDrink({...drink, price: 6})

```
Updating Nested Objects
``` javascript
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: 'San Francisco',
      zipCode: 94111
    }
  });

  const handleClick = () => {
    setCustomer({...customer})
    //spread operator in javascript is shallow
    // ...customer is going to reference same object address in memory
    //this not what we want while updating state in react applications
    //we should make sure that our new state object is completly
    //independent of existing state object. they don't share anything 
    setCustomer({
      ...customer, 
      address: {...customer.address, zipcode: 94112}
    })
    //we call setCustomer and pass new object {}
    //in this object first we pass all the properties of old customer object
    //we set the address property to new object and in this first we spread 
    //existing customer address object and then we change the zipCode
    //Always prefer a flat structure over a deeply nested structure
  }

```

Updating Arrays
``` javascript
  //same thing applies to an array, never mutate it 
  // we should pass a brand new array
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    //add ---> tags.push(); cannot do because it will modify the original array
    setTags([...tags, 'exciting']);

    //Remove   all arrays have filter method
    setTags([tags.filter(tag => )])

    //Update
    setTags(tags.map(tag => ==='happy'?'happiness':tag))
  }

```

Updating Array of Objects
``` javascript
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false}
    {id: 2, title: 'Bug 2', fixed: false}
  ])

  //now on click if we have to mark a bug as fixed
  const handleClick = () => {
    setBugs(bug.map(bug => bug.id === 1 ? {...bug, fixed:true} : bug))
  }

```

Simplifying Update Logic with Immer
``` javascript
  // to install npm i immer
  import produce from 'immer';

  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false}
    {id: 2, title: 'Bug 2', fixed: false}
  ])

  const handleClick = () => {
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if(bug) bug.fixed = true
    }))
    //by convention we have to pass an --> produce(arrow functn here)
    //draft is a proxy object that records changes we apply to the bugs array
    // so we are free to mutate or modify it just like a regular array and immer will 
    // create a new object with the updated changes behind the scenes for us
  }

```  
Sharing State between Components###
``` javascript
  //NavBar
  interface Props{
    cartItemsCount: number
    //cartItens: string[]
    // this could also be written but navbar only needs the count of cartItems 
  }
  const NavBar = ({cartItemsCount}:Props) => {
    return(
      <div>NavBar: {cartItemsCount} </div>
    )
  }

  //Cart
  interface Props {
    cartItens: string[]
    onClear: () => void;
  }
  const Cart = ({cartItems, onClear}:Props) => {
    return(
      <>
        <div>Cart</div>
        <ul>
          {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={onClear}>Clear</button>
      </>
    )
  }

  const App = () => {
    const [cartItems, setCartItems]= useState(['Product1', 'Product2']);

    return(
      <>
        <NavBar cartItemsCount = {cartItems.length}/>
        <Cart cartItems= {cartItems} onClear={() => setCartItems([])} />        
      </>
    )
    // had the user wanted to remove a particular cartItems then
    // onRemove= {(product) => then remove that product using filter method from 
    //cartItems array}
  } 

```
Exercise- Building an Expandable Text Component
``` javascript
  interface Props {
    children: string;
    maxChars?: number;
  }
  const ExpandableText = ({children, maxChars = 100}: Props) => {
    const [isExpanded, setExpanded] =useState(false);

    if (children.length <= maxChars) return <p>{children}</p>

    const text = isExpanded ? children : children.substring(0, maxChars);
    return <p>{text}... <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'less':'More'}</button></p>
  }

  function App() {
    return (
      <div>
        <ExpandableText maxChars={10}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </ExpandableText>
      </div> 
    )
  }

```

Exercise- Building an Expandable Text Component
``` javascript
  const [game, setGame] = useState({
    id: 1, 
    player:{
      name:"John",
    } 
  });

  const handleClick = () => {
    setGame({...game, player: {...game.player, name:'Bob'}})
  }

  const[pizza, setPizza] = useState({
    name:'Spicy Pepperoni',
    toppings: ['Mushrom','Paneer']
  })
  //handleClick
  setPizza({...pizza, toppings: [...pizza.toppings,'Cheese']})

  const [cart, setCart] = useState([
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1}
    ]
  ]);
  //handleClick
  setPizza({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)}); //item.quantity + 1

```

Building a Form and Submitting it
```javascript
  //Form.tsx

  import {FormEvent, useRef} from 'react';

  const Form = () => {
    //useRef --> to reference a dom element like input field and read its value 
    //when form is submitted
    //using the ref hook we can reference any kind of element -- not necessarily a input field 
    // we can reference a button, heading, list and so on 
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    //why the default value is null
    // initially when we create a ref object we do not have access to dom node
    // because the dom is created after react renders our component
    // so we have no value to provide here
    // when react renders the component, it will set the value to the current dom node
    // and when the node is removed from screen it will again reset the value to null our initial value
    // the value is either null or reference an existing dom node
    const person = {name: '', age: 0};

    const handleSubmit = (event:FormEvent) => {
      event.preventDefault();
      if(nameRef.current !== null)
        person.name = nameRef.current.value;
      if(ageRef.current !== null)
        person.age = ageRef.current.value;
    }

    return(
      <form onSubmit={(event) => {
      }}>
        <div className="mb-3">
          <label htmlFor= "name" className="form-label">Name</label>
          <input ref={nameRef} id="name" type="text" className= "form-control" />
        </div> 
        <div className="mb-3">
          <label htmlFor= "age" className="form-label">Age</label>
          <input ref={ageRef} id="age" type="number" className= "form-control" />
        </div>  
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }

  function App() {
    return ()
  }

```
  
