# Second Semester Project

Question of Preference: Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI. Implement a page for the custom hook, 404, and a page to test error boundary.
## Table of Contents
1. **Project Overview**
2. **Project Structure**
3. **Components**
    - `useCounter.jsx`
    - `Counter.jsx`
    - `ErrorBoundary.jsx`
    - `Menu.jsx`
    - `NotFound.jsx`
    - `ReducerCounter.jsx`
    - `TestError.jsx`
4. **Setup and Usage**

## 1. Project Overview
This project is built using React and is primarily focused on creating a custom counter hook with various capabilities and a user interface. It also includes additional pages for testing error handling and addressing 404 errors.

## 2. Project Structure
The project's file structure is organized as follows:

```
.
|-- App.css
|-- App.js
|-- assets
|   `-- ham.png
|-- components
|   |-- Counter.jsx
|   |-- CustomHooks
|   |   `-- useCounter.jsx
|   |-- ErrorBoundary.jsx
|   |-- Menu.jsx
|   |-- NotFound.jsx
|   |-- ReducerCounter.jsx
|   `-- TestError.jsx
|-- index.css
|-- index.js
`-- logo.svg
```

## 3. Components

### 3.1 useCounter.jsx
`useCounter.jsx` defines a custom counter hook that provides the following functions:
- `increase()`: Increments the counter by 1.
- `decrease()`: Decrements the counter by 1.
- `reset()`: Resets the counter to 0.
- `setValue(e)`: Allows setting the counter to a specific value entered in an input field.

### 3.2 Counter.jsx
`Counter.jsx` is a React component that makes use of the custom counter hook from `useCounter.jsx`. It offers a user-friendly interface for the counter, including options to increment, decrement, reset, and set the counter value.

### 3.3 ErrorBoundary.jsx
`ErrorBoundary.jsx` is a React component designed to catch and handle errors within the application. If an error occurs within its child components, it displays an error message.

### 3.4 Menu.jsx
`Menu.jsx` is a navigation menu component, providing links that allow users to navigate between different pages within the application. The available links include Counter, useReducerCounter, and Test Error Boundary pages.

### 3.5 NotFound.jsx
`NotFound.jsx` is a straightforward React component used to display a "NOT FOUND" message. It serves the purpose of handling 404 errors.

### 3.6 ReducerCounter.jsx
`ReducerCounter.jsx` is another React component, this time utilizing the `useReducer` hook to create a counter with options for incrementing, resetting, decrementing, and setting the counter value. It employs a reducer function to manage state changes.

### 3.7 TestError.jsx
`TestError.jsx` is a React component that allows users to test error boundaries. It maintains a count, and when this count reaches or exceeds 3, it intentionally throws an error to test the error boundary component.

## 4. Setup and Usage
To get your project up and running, please follow these steps:

1. Clone the project repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the `npm install` command to install the project's dependencies.
4. Start the development server with `npm start`.

You can now access and interact with the application in your web browser.

