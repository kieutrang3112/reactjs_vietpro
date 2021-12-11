import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

const App = () => {
  //hook (mounting)
  React.useEffect(() => {
    console.log("componentDidMount");
  }, []);
  //chuyển sang updating
  const [data, setData] = React.useState(true);
  const onClickData = () => {
    return setData(!data);
  };
  //chỉ chạy khi thay đổi state
  React.useEffect(()=> {
    //lần đầu là ko chạy mỗi khi đổi state chạy
    if(!data) {
      setData(!data);
      console.log("componentDidUpdate");
    }
  },[data]);

  return (
    <button onClick={()=>onClickData()} type="button">
      Action
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
