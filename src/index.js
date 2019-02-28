import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { withStateHandlers } from "recompose";

import "./styles.css";

const MyContext = createContext({});

const PrintContext = ({ count, increment }) => {
  const myContext = useContext(MyContext);
  return (
    <>
      <div>
        {myContext.foo} {count}
      </div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

const enhance = withStateHandlers(
  { count: 0 },
  {
    increment: ({ count }) => () => ({ count: count + 1 })
  }
);

const PrintContextWithCount = enhance(PrintContext);

function App() {
  return (
    <MyContext.Provider value={{ foo: "bar" }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PrintContextWithCount />
      </div>
    </MyContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
