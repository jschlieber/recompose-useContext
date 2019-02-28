import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { withStateHandlers } from "recompose";

import "./styles.css";

const MyContext = createContext({});

const PrintContext = () => {
  const myContext = useContext(MyContext);
  return <div>{myContext.foo}</div>;
};

function App() {
  return (
    <MyContext.Provider value={{ foo: "bar" }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PrintContext />
      </div>
    </MyContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
