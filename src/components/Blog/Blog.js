import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <hr></hr>
            <div>
                <h2>How Does React Work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. While building client-side apps, a team of Facebook developers realized that the DOM is slow. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>
            <div>
                <h2>Difference Between Props And State.</h2>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component. The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
            </div>
            <div>
                <h2>Use Of useEffect Other Than Data Loading Using API.</h2>
                <p>The useEffect hook allows us to respond to changes in the component lifecycle. The component lifecycle refers to a set of events that occur from the time a component is mounted to the DOM until it is removed. useEffect is most commonly used to execute code when the component is initially rendered, when it is updated, and when it is unmounted. Validating an input while it's receiving characters is another great application for useEffect. The useEffect can be used to filter an array "on the fly" by typing letters into an input element. The useEffect can be used to trigger an animation on a shopping cart as a side effect of adding a new product to it.</p>
            </div>
            <hr></hr>
        </div>
    );
};

export default Blog;