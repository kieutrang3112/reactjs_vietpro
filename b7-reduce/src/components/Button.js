import React from "react";
import { useDispatch } from "react-redux";
const Button = () => {
  const dispatch = useDispatch();
  const onClickGetNumber = () => {
      dispatch({
        type: "GET_NUMBER",
      });
  }
  const onClickReset = () => {
    dispatch({
        type: "RESET_NUMBER"
    });
  }
  return (
    <div>
      <button onClick={onClickGetNumber} className="btn btn-dark">Get number</button>
      <button  onClick={onClickReset} className="btn btn-dark">Reset</button>
    </div>
  );
};
export default Button;
