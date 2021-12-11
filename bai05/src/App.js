import logo from './logo.svg';
import React from 'react';
import './App.css';
import react from 'react';
import reactDom from 'react-dom';



const App = (e) => {
  const changeData = () => {
    console.log("oke");
  }
  return (
    <form className="frm" method="post">
        <input onChange={changeData} type="text" name="email"></input>
        <input type="text" name="password"></input>
        <button type="submit">Login</button>
    </form>
  );
}

reactDom.render(<App/>,document.getElementById("root"));


