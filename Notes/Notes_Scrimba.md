```javascript

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

// ReactDom is a variable which has a render method 

//Challenge - recreate the above line of code in vanilla JS by creating and
//appending an h1 to our div#root (without using innerHTML).

//- Create a new h1 element
//- Give it some textContent
//- Give it a class name of "header"
//- append it as a child of the div#root
    
//const h1 = document.createElement("h1")
//h1.textContent = "This is an imperative way to program"
//h1.className = "header"
//document.getElementById("root").append(h1);

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
//document.getElementById("root").append(h1)

const ol = document.createElement("ol")
const li1 =  document.createElement("li")
li1.textContent = 'first list item'
const li2 =  document.createElement("li")
li2.textContent = 'Second list item'
ol.append(li1, li2)

const div =  document.createElement("div")
div.append(h1, ol)
document.getElementById("root").append(div)


import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(navbar)

```

```
    1. Why do we need to `import React from "react"` in our files?
        React is what defines JSX so in order to use jsx we need to import React

    2. If I were to console.log(page) in index.js, what would show up?
        A JavaScript object. React elements that describe what React should
        eventually add to the real DOM for us.

    3. What's wrong with this code:
        ```
        const page = (
            <h1>Hello</h1>
            <p>This is my website!</p>
        )
        ```
        We need our JSX to be nested under a single parent element

    4. What does it mean for something to be "declarative" instead of "imperative"?
        Declarative means I can tell the computer WHAT to do 
        and expect it to handle the details. 
        Imperative means I need
        to tell it HOW to do each step.

    5. What does it mean for something to be "composable"?
        We have small pieces that we can put together to make something
        larger/greater than the individual pieces.

```

Custom Components
```javascript
    import React from "react"
    import ReactDOM from "react-dom"

    function TemporaryName() {
        return (
            <div>
                <img src="./react-logo.png" width="40px" />
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        )
    }
    ReactDOM.render(<TemporaryName />, document.getElementById("root"))

```

Quiz!
```
    1. What is a React component?
    A function that returns React elements. (UI)
    when a function returns JSX , react elements are created

    2. What's wrong with this code?
    ```
    function MyComponent() {
        return (
            <small>I'm tiny text!</small>
        )
    }
    ```

    3. What's wrong with this code?
    ```
    function Header() {
        return (
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
        )
    }

    ReactDOM.render(<Header />, document.getElementById("root")

```


//props being passed into a component makes it more readable

```javascript
    import data from './Data.js'

    export default function App() {
        const cards = data.map(item => {
            return (
                <Card
                    key={item.id}
                    {...item}
                    // item = {item}
                    
                />
            )
        })   
        return (
            <div>
                <Navbar />
                <section className="cards-list">
                    {cards}
                </section>
            </div>
        )
    }

```

//Event Listeners
```javascript
    import React from "react"

    export default function App() {
        function handleClick() {
            console.log("I was clicked!")
        }
        function handleOnMouseOver() {
            console.log("MouseOver")
        }
        /**
         * Challenge: 
         * Log something to the console when the mouse hovers over the image
         */
        return (
            <div className="container">
                <img 
                    src="https://picsum.photos/640/360" 
                    onMouseOver={handleOnMouseOver} 
                />
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }

```

```
    1. How would you describe the concept of "state"?
    A way for React to remember saved values from within a component.
    This is similar to declaring variables from within a component,
    with a few added bonuses (which we'll get to later)


    2. When would you want to use props instead of state?
    Anytime you want to pass data into a component so that
    component can determine what will get displayed on the
    screen.


    3. When would you want to use state instead of props?
    Anytime you want a component to maintain some values from
    within the component. (And "remember" those values even
    when React re-renders the component).


    4. What does "immutable" mean? Are props immutable? Is state immutable?
    Unchanging. Props are immutable. State is mutable.

```

changing state
```javascript
    export default function App() {
        /**
        * Challenge: Set up state to track our count (initial value is 0)
        */
        const [count, setCount] = React.useState(0) 
        function handleMinus () {
            console.log("minus clicked")
            if (count!==0) 
                setCount(count - 1);
        }
        function handlePlus () {
            console.log("plus clicked")
            //console.log(count++)
            setCount(count + 1);
        }
        return (
            <div className="counter">
                <button className="counter--minus" onClick= {handleMinus}>–</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button className="counter--plus" onClick= {handlePlus}>+</button>
            </div>
        )
    }


    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1)// react will automatically read count value into prevCount
    }
    // Challenge: update `substract` to use a callback function
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

```

```
    1. You have 2 options for what you can pass in to a
    state setter function (e.g. `setCount`). What are they?
    
    a. New value of state (setCount(42))
    b. Callback function - whatever the callback function 
    returns === new value of state


    2. When would you want to pass the first option (from answer
    above) to the state setter function?
    Whenever you don't need the previous value of state to determine
    what the new value of state should be.


    3. When would you want to pass the second option (from answer
    above) to the state setter function?
    Whenever you DO need the previous value to determine the new value

```

Callback Function
```javascript
    import React from "react"
    import boxes from "./boxes"

    export default function App() {
        /**
        * Challenge part 1:
        * 1. Initialize state with the default value of the
        *    array pulled in from boxes.js
        * 2. Map over that state array and display each one
        *    as an empty square (black border, transparent bg color)
        *    (Don't worry about using the "on" property yet)
        */
        const [blackBoxes, setBloxes] = React.useState(boxes)
        
        function handleClick(Id) {
        //console.log("App:" + Id);
        setBloxes( blackBoxes.map( x => x.id === Id ? {...x,on:!x.on} : x ) )
        }
        return (
            <main>
                <h1>Boxes will go here</h1>
                <Box 
                    blackBoxes= {blackBoxes} 
                    handleClick = {handleClick}
                />
            </main>
        )
    }
    function Box(props) {
        function handleClick(Id){
            props.handleClick(Id);
        }
        return (
            <>
                {props.blackBoxes.map(box => {
                return (
                    <div
                        key={box.id}
                        className="blackbox"
                        style={{ backgroundColor: box.on ? 'black' : '' }}
                        onClick={() => handleClick(box.id)}
                    >

                    </div>
                )
                })}
            </> 
        )
        
    }

    .blackbox{
        border: 2px solid black;
        margin: 10px;
        padding : 2px;
        height : 100px;
        width: 100px;
        display: block;
        
    }

```

Form
```javascript
    import React from "react"
    export default function Form() {
        const [formData, setFormData] = React.useState(
            {firstName: "", lastName: ""}
        )
        console.log(formData)
        function handleChange(event) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                    // [event.target.name]  --> it will return firstName or lastName dynamically
                    //depending upon which is changing
                }
            })
        }
        return (
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                />
            </form>
        )
    }

```

```
    1. In a vanilla JS app, at what point in the form submission
    process do you gather all the data from the filled-out form?
    Right before the form is submitted.


    2. In a React app, when do you gather all the data from
    the filled-out form?
    As the form is being filled out. The data is all held in local state.


    3. Which attribute in the form elements (value, name, onChange, etc.)
    should match the property name being held in state for that input?
    `name` property.


    4. What's different about saving the data from a checkbox element
    vs. other form elements?
    A checkbox uses the `checked` property to determine what should
    be saved in state. Other form elements use the `value` property instead.


    5. How do you watch for a form submit? How can you trigger
    a form submit?
    - Can watch for the submit with an onSubmit handler on the `form` element.
    - Can trigger the form submit with a button click.

```

Controlled Inputs  
mainataining single source of truth
```javascript
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
    )
    //State is controlling the input field and so here there is single source of truth
    // value field always depends on state for its value
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
                // [event.target.name]  --> it will return firstName or lastName dynamically
                //depending upon which is changing
            }
        })
    }
    //here we are updating state everytime the input field is changing 

    <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
    />
    <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
    />
    <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
    />
    <textarea 
        placeholder="enter you text" 
        onChange={handleChange}
        name="comments"
        value={formData.comments} 
    />
    
```

```javascript
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    <input 
        type="checkbox" 
        id="isFriendly" 
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
    />
    <label htmlFor="isFriendly">Are you friendly?</label>
    <br />
```

Radio Buttons
```javascript
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: ""
        }
    )
    console.log(formData.employment)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    <fieldset>
        <legend>Current employment status</legend>

        <input 
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        
        <input 
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        
        <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
                
    </fieldset>

```

Select Box
```javascript
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData.favColor)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    <label htmlFor="favColor">What is your favorite color?</label>
    <br />
    <select 
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
    >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
    </select>

```

Submiting a Form
```javascript
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    <form onSubmit={handleSubmit}>

        <button>Submit</button>
    </form>

```

```
    1. In a vanilla JS app, at what point in the form submission
    process do you gather all the data from the filled-out form?
    Right before the form is submitted.


    2. In a React app, when do you gather all the data from
    the filled-out form?
    As the form is being filled out. The data is all held in local state.


    3. Which attribute in the form elements (value, name, onChange, etc.)
    should match the property name being held in state for that input?
    `name` property.


    4. What's different about saving the data from a checkbox element
    vs. other form elements?
    A checkbox uses the `checked` property to determine what should
    be saved in state. Other form elements use the `value` property instead.


    5. How do you watch for a form submit? How can you trigger
    a form submit?
    - Can watch for the submit with an onSubmit handler on the `form` element.
    - Can trigger the form submit with a button click.
```

useEffect dependencies array
```javascript
    import React from "react"
    export default function App() {
        const [starWarsData, setStarWarsData] = React.useState({})
        const [count, setCount] = React.useState(1)
        /**
         * Challenge: Combine `count` with the request URL
         * so pressing the "Get Next Character" button will
         * get a new character from the Star Wars API.
         * Remember: don't forget to consider the dependencies
         * array!
         */
        React.useEffect(function() {
            console.log("Effect ran")
            fetch(`https://swapi.dev/api/people/${count}`)
                .then(res => res.json())
                .then(data => setStarWarsData(data))
        }, [count])
        return (
            <div>
                <h2>The count is {count}</h2>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
        )

        // using async function and await keyword
        React.useEffect(async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }, []) 

        React.useEffect(() => {
            function watchWidth() {
                console.log("Setting up...")
                setWindowWidth(window.innerWidth)
            }
            
            window.addEventListener("resize", watchWidth)
            
            return function() {
                console.log("Cleaning up...")
                window.removeEventListener("resize", watchWidth)
            }
        }, [])
        /**
        useEffect takes a function as its parameter. If that function
        returns something, it needs to be a cleanup function. Otherwise,
        it should return nothing. If we make it an async function, it
        automatically retuns a promise instead of a function or nothing.
        Therefore, if you want to use async operations inside of useEffect,
        you need to define the function separately inside of the callback
        function, as seen below:
        */
        React.useEffect(() => {
            async function getMemes() {
                const res = await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json()
                setAllMemes(data.data.memes)
            }
            getMemes()
            //return function() {}
        }, [])
    }

```

useEffect quiz
```
    1. What is a "side effect" in React? What are some examples?
    - Any code that affects an outside system.
    - local storage, API, websockets, two states to keep in sync


    2. What is NOT a "side effect" in React? Examples?
    - Anything that React is in charge of.
    - Maintaining state, keeping the UI in sync with the data, 
    render DOM elements


    3. When does React run your useEffect function? When does it NOT run
    the effect function?
    - As soon as the component loads (first render)
    - On every re-render of the component (assuming no dependencies array)
    - Will NOT run the effect when the values of the dependencies in the
    array stay the same between renders


    4. How would you explain what the "dependecies array" is?
    - Second paramter to the useEffect function
    - A way for React to know whether it should re-run the effect function

```