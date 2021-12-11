import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Button from "./components/Button";
import Number from "./components/Number";
import React from "react";
function App() {
  
  return (
    <Provider store={store}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <div id="main">
            <Number/>
            <Button/>
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
