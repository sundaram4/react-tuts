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