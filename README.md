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
  
Controlled Components
```javascript
  //there is another way to get values of an input field in a form using state hook
  const Form = () => {
    const [person, setPerson] = useState({
      name: '',
      age: 0
    });

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
    }

    // all input fields have a change event that is triggred evertime a user types a keystroke
    // we can handle this event everytime the user types something in the input field
    // to get the current value of the input field 
    // onChange = {(event) => event.target.value}
    <div className="mb-3">
      <label htmlFor= "name" className="form-label">Name</label>
      <input 
        onChange={(event) => 
          setPerson({...person, name: event.target.value})
        }
        value={person.name}// the input field always relies on the value in our state variable 
        id="name" 
        type="text" 
        className= "form-control" 
      />
    </div>
    <div className="mb-3">
      <label htmlFor= "age" className="form-label">Age</label>
      <input 
        onChange={(event) => 
          setPerson({...person, age: parseInt(event.target.value)})
        } 
        value={person.age}
        id="age" 
        type="number" 
        className= "form-control" 
      />
    </div> 
    //with this approach evertime the user types or removes a character, the state changes  
    // the component has to re render
    //if you are dealing with complex form with lot of elements and it is a large page and performance issues
    // use the Ref hook but for the most cases state hook is fine  

    // always have a single source of truth
    value={person.name}// the input field always relies on the value in our state variable 
    //so we have a single source for storing the name of the person
    //it has become a controlled component because its state is entirely controlled by React
    //meaning the value of input field is not managed by dom but instead stored and updated in the
    // component state 
  }

```

Managing Forms with React Hook Form
```javascript
  // as the form grows it becomes difficult to manage state , for every input field we have 
  // to write Onchange and value field 
  // to simplify we can go for React Hook Form --> quickly build forms with less code
  // npm i rect-hook-form
  import {useForm, FieldValues} from "react-hook-form";
  
  const {register}  = useForm();
  console.log(register('name')); 
  //name:"name" --> we just set
  //onBlur: async (event) => {..}
  //onChange: async (event) => {..}
  //ref: (ref) => {..}  --> react-hook-form uses reference objects to get value from input fields
  const Form = () => {
    const {register, handleSubmit}  = useForm();

    const onSubmit = (data:FieldValues) => console.log(data); // data : {name:John, age: 18}

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register('name')}
          id="name" 
          type="text" 
          className= "form-control" 
        />
        <input 
          {...register('age')}
          id="age" 
          type="number" 
          className= "form-control" 
        />
      </form>
    )
  }

```

Applying Validation
```javascript
  interface FormData {
    name:string;
    age: number;
  }

  const {register, handleSubmit, formState: {errors}}  = useForm<FormData>();
  //with the useForm<FormData> --> type annotation we can get autocompletion and ensure typesafety
  //here errors.name?.type
  console.log(formState);

  <input 
    {...register('name', {required: true, minLength: 3, maxLength:10})}
    id="name" 
    type="text" 
    className= "form-control" 
  />
  {errors.name?.type==='required' && <p className="text-danger">The name field is required</p>}
  //if we don't have a name property and we try to access type property,
  //it will show error, ? --> means it can be null
  //errors.name?.type --> this expression is evaluated only if errors has a name property
  
  //another error message if the name is too short
  {errors.name?.type==='minLength' && <p className="text-danger"> The name must be at least 3 characters </p>}

```

Schema based validation with zod
```javascript
  //npm i zod   --> website zod.dev
  //npm i @hookform/resolvers@2.9.11
  import {z} from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';

  //we can define the shape or schema of our form
  const schema = z.object({
    name: z.string().min(3, { message : 'Name must be at least 3 characters'}), // by chaining methods rule we can define one or more validations
    age: z.number({invalid_type_error: 'Age field is required'}).min(18, { message : 'Age must be at least 18'})
  })

  type FormData = z.infer<typeof schema>; // this returns a typescript type which is similar to an interface 
  // so using (type) we can define the shape of an object --> similar to an interface

  const {register, handleSubmit, formState: {errors}}  = useForm<FormData>({resolver: zodResolver(schema) });

  <input 
    {...register('name')}
    id="name" 
    type="text" 
    className= "form-control" 
  />
  {errors.name && <p className="text-danger">{errors.name.message}</p>}

  <input 
    {...register('age', {valueAsNumber: true})}
    id="age" 
    type="number" 
    className= "form-control" 
  />
  {errors.age && <p className="text-danger">{errors.age.message}</p>}

```

Disabling the submit button
```javascript
  const {register, handleSubmit, formState: {errors, isValid}}  = useForm<FormData>({resolver: zodResolver(schema) });

  <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>

```

Project Expense Tracker
1-Building Expense List
```javascript
  //ExpenseList.tsx

  interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string; 
  }

  interface Props {
    expenses: Expense[]
    onDelete: (id: number) => void;
  }

  const ExpenseList = ({expenses, onDelete }: Props) => {
    if(expenses.length === 0) return null;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button 
                className="btn btn-outline-danger" 
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>)}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc).toFixed(2)}</td>
          {// acc --> accumaletor is just a number that holds the value
            //so the reduce method iterates over the expense array and each iteration
            // it runs the arrow function and takes expense.amount and adds it to the acc
            // second argument --> pass the intial value of the accumaletor
            //toFixed --> Number of digits after the decimal point
          }
          <td></td>
          <td></td>
        </tfoot>
      </table>
    )
  }
  export default ExpenseList

  function App() {
    const [expenses, setExpense] = useState=([
      {id:1, description:'milk', category:'Grocery', amount:10}
      {id:2, description:'bbb', category:'Grocery', amount:10}
      {id:3, description:'ccc', category:'Grocery', amount:10}
    ])

    return (
      <div>
        <ExpenseList 
          expenses={expenses} 
          onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
        />
      </div>
    )
  }

```

2-Building Expense Filter
```javascript
  //ExpenseFilter.tsx

  interface Props{
    onSelectCategory: (category: string) => void;
  }

  const ExpenseFilter = ({onSelectCategory}: Props) => {
    return(
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All categories</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
    )
  }

  function App() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [expenses, setExpense] = useState=([
      {id:1, description:'milk', category:'Grocery', amount:10}
      {id:2, description:'bbb', category:'Grocery', amount:10}
      {id:3, description:'ccc', category:'Grocery', amount:10}
    ])

    const visibleExpenses = selectedCategory 
      ? expense.filter(e => e.category === selectedCategory) 
      : expenses

    return (
      <div>
        <div className='mb-3'>
          <ExpenseFilter onSelectCategory = {category => setSelectedCategory(category)}>
        </div>
        <ExpenseList 
          expenses={visibleExpenses} 
          onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
        />
      </div>
    )
  }

```

3-Building the Expense Form
```javascript
  //ExpenseForm.tsx
  
  const ExpenseForm = () => {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor= 'description' className='form-label'>Description</label>
          <input id='description' type='text' className='form-control'/>
        </div>
        <div className="mb-3">
          <label htmlFor= 'amount' className='form-label'>Amount</label>
          <input id='amount' type='number' className='form-control'/>
        </div>
        <div className="mb-3">
          <label htmlFor= 'category' className='form-label'>Category</label>
          <select id='category' type='text' className='form-select'/>
            <option vlaue=''></option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }

  //Categories.tsx
  export const categories = ['Groceries', 'Utilities', 'Entertainment']

  //ExpenseFilter.tsx
  interface Props{
    onSelectCategory: (category: string) => void;
  }
  const ExpenseFilter = ({onSelectCategory}: Props) => {
    return(
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All categories</option>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    )
  }

  function App() {
    //...... from top
    return (
      <div>
        <div className='mb-5'>
          <ExpenseForm />
        </div>
        <div className='mb-3'>
          <ExpenseFilter onSelectCategory = {category => setSelectedCategory(category)}>
        </div>
        <ExpenseList 
          expenses={visibleExpenses} 
          onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
        />
      </div>
    )
  }

```

Integrating with React Hook Form and Zod
```javascript
  import {z} from 'zod';
  import {useForm} from 'react-hook-form';
  import {zodResolver} from '@hookform/resolvers/zod';

  const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z.number().min(1).max(100_000),
    category: z.enum(categories, {
      errorMap: () => ({message: 'Category is required'})
    })
    //an enum can be one of many values
  })

  /*const schema = z.object({
    name: z.string().min(3, { message : 'Name must be at least 3 characters'}), // by chaining methods rule we can define one or more validations
    age: z.number({invalid_type_error: 'Age field is required'}).min(18, { message : 'Age must be at least 18'})
  })*/

  type ExpenseFormData = z.infer<typeof schema>;

  const ExpenseForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<ExpenseFormData>({resolver: zodResolver(schema)});

    return (
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className="mb-3">
          <label htmlFor= 'description' className='form-label'>Description</label>
          <input {...register('description')} id='description' type='text' className='form-control'/>
          {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor= 'amount' className='form-label'>Amount</label>
          <input {...register('amount')} id='amount' type='number' className='form-control'/>
          {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor= 'category' className='form-label'>Category</label>
          <select {...register('category')} id='category' type='text' className='form-select'/>
            <option vlaue=''></option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </select>
          {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }

  const categories = ['Groceries', 'Utilities', 'Entertainment'] as const;

```

Adding an Expense
```javascript
  interface Props {
    onSubmit: (data: ExpenseFormData) => void;
  } 
  const {
    register, 
    handleSubmit, 
    reset,
    formState:{errors}
  } = useForm<ExpenseFormData>({resolver: zodResolver(schema)});

  const ExpenseForm = ({onSubmit} : Props) => {
    <form onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset();
    })}>
    </form>
  }

  function App() {
    //...... from top
    return (
      <div>
        <div className='mb-5'>
          <ExpenseForm onSubmit = {expense => setExpense([...expenses, {...expense, id: expenses.length+1}])} />
        </div>
        <div className='mb-3'>
          <ExpenseFilter onSelectCategory = {category => setSelectedCategory(category)}>
        </div>
        <ExpenseList 
          expenses={visibleExpenses} 
          onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
        />
      </div>
    )
  }


```

Understanding the Effect Hook
```javascript
  // useEffect ( () => {})
  // To execute a piece of code after a component is rendered
  import {useRef} from 'react';

  function App() {
    const ref = useRef<HTMLInputElement>(null);

    //Side effect --> it is changing something outside of the component
    // it is a impure component, to make this pure we need to use Effect Hook
    if(ref.current) ref.current.focus(); //changing the state of dom

    useEffect( () => {
        //Side Effect --> any piece of code that causes side effects
        // just like other hooks call this at the top level of your componenet
        //can be called multiple times for different purposes
        if(ref.current) ref.current.focus();
      }
    )
    useEffect (() => {
        document.title = 'My App';
    })
    // when multiple effect hooks are there , React will execute them after each render
    // in order in which they are written

    return (
      <div>
        <input ref= {ref} type="text" className="form-control"> 
      </div>
    )
  }

```

Effect Dependencies
```javascript
  const ProductList = ( {category}: {category:string} ) => {
    const [products, setProducts] = useState([]);

    // after render effect
    useEffect(() => {
      console.log('Fetching products in ', category);
      setProducts(['Clothing', 'Household'])
    }, [category]); // it will re run useEffect if the value of category changes
    // once the state changes , react will re render and useEffect will trigger 
    // causing the state to change again , and effect hook will run again and so on.. causing an infite loop
    // if we don't supply [category] or [] it will run in an infinite loop 
    // [] to run this effect only once when the component is first rendered
    //[category] run only when value of category changes

    return (
      <div>ProductList</div>
    )
  } 
  
  function App() {
    const [category, setCategory] = useState('');

    return(
      <div>
        <select 
          className='form-select'
          onChange= { (event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category = {category} />
      </div>
    )
  }

```

Effect Clean Up
```javascript
  const connect = () => console.log('Connecting');
  const disConnect = () => console.log('Disonnecting');

  function App() {
    useEffect(() => {
      
      connect(); //if we are showing a model our cleanup function should hide the model
      //if we are fetching data through api, in cleanup we should abort it

      //to provide a clean up code we return a function
      return () => disconnect(); // if we need to do cleanup this is how we do it
    });

    return <div></div>
  }

```

Fetching Data
```javascript
  // npm i axios
  import axios from 'axios';

  interface User {
    id: number;
    name: string; // only define the properties that we are going to use
  }

  function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect( () => {
      // the calling of server is not going to happen immediately
      //Perhaps it will take atleast half a second
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users') // this method will return a promise
        //Promise: An object that holds the eventual result or failure of an asynchronous operation
        //asynchronous --> fancy term for an operation that might take long time
        //get<User[]> --> specify the type of data we are going to fetch
        .then(res => setUsers(res.data));
    }, []) //pass an empty array as a dependency to this effect

    return <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  }

```
Understanding HTTP Requests
```javascript
  // when we call the get method, an http request to the server is made
  //Hypertext Transfer Protocol --> A protocol for transfering data over the Internet
  // client(browser) -->(http request) server
  // server -->(http response object)  client
  //in http every request and every response has 2 sections
  // 1- Header --> we specify metadata
  // 2- Body --> we supply or get the data 
```

Handling Errors
```javascript
  // while calling the server many things can go wrong
  // in javascript all promise have method called catch
  // that we can use for catching errors

  const [error, setError] = useState('');

  useEffect( () => {
    // get -> promise -> res/err
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users') 
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message));
  }, [])

```

Working with Async and Await
```javascript
  import {AxiosError} from 'axios';

  useEffect( () => {
    // a new func with async keyword defined inside the arrow function
    const fetchUsers = async () => {
      try{
        const res = await axios
          .get<User[]>('https://jsonplaceholder.typicode.com/users') 
        setUsers(res.data);
      }
      catch (err) {
        setError((err as AxiosError).message);
      }
    }
    fetchUsers();
    
  }, [])

```

Cancelling a Fetch Request
```javascript
  // sometime we need to return a cleanup function from our effect
  useEffect( () => {
    const controller = new AbortController();// built in class in modern browser
    // allows us to abort a aynchronous operation like fetch request, dom manipulation ans so on
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal:controller.signal}) 
      .then(res => setUsers(res.data))
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      )};
        
    
    return () => controller.abort();
  }, [])

```

Showing a Loading Indicator
```javascript
  //showing a loading indicator while fetching the data
  const [isLoading, setLoading] = useState(false);

  setLoading(true);
  axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal:controller.signal}) 
    .then(res => {
      setUsers(res.data);
      setLoading(false);
    })
    .catch(err => {
      if(err instanceof CanceledError) return;
      setError(err.message)
      setLoading(false);
    )};


  return (
    {isLoading && <div className='spinner-border'></div>}
  )

```

Deleting Data
```javascript
  const deleteUser = (user:User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));
    
    axios.delete('https://jsonplaceholder.typicode.com/users' + user.id)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      }) 

  }

```

Creating Data
```javascript
  const addUser = () => {
    const originalUsers = [...users]
    const newUser = {id: 0, name: 'Kunal' };
    setUsers([...users, newUser]); 

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(res => setUsers([res.data, ...users])); 
      // or it can be written as
      .then(({data: savedUser}) => setUsers([savedUser, ...users])); 
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      }) 
  }

  <button className = 'btn btn-primary' onClick={addUser}>Add</button>

```

Updating Data
```javascript
  const updateUser = (user:User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name + '!'};
    setUsers(users.map(u => u.id === user.id ? updatedUser : user))

    axios.patch('https://jsonplaceholder.typicode.com/users' + user.id, updatedUser)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }
  
  <button className = 'btn btn-outline-secondary' onClick={() => updateUser(user)}>Update</button>

```

