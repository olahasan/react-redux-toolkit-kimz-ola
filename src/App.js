// import './App.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { add, minus } from "./store/counterSlice";

function App() {

 const globalState = useSelector((state) => state);
//  console.log(globalState);


 const dispatch = useDispatch();
 const handleDecreaseClick = () => {
    dispatch(minus())
    // console.log("decrease clicked");
 }

 const handleIncreaseClick = () => {
    // dispatch(add())
    dispatch(add(1))
    // console.log("increase clicked");
 }

 const handleToggleLogin = () => {
   if(globalState.auth.isLogged ===true){
     dispatch(logout())
    }else{
      dispatch(login())
    }
    // console.log("handleToggleLogin");
 }

 useEffect(() => {
  dispatch(add(500))
 } , [dispatch])

  return (
    <div className="App">
     <h1>Hello Redux Toolkit Basics</h1>
     {globalState.auth.isLogged ===true ? <>
      <div className="Counter"> Counter: {globalState.counter.value}</div>
      <div>
        <button className="btn" onClick={handleDecreaseClick}>decrease -</button>
        <button className="btn" onClick={handleIncreaseClick}>increase +</button>
      </div>
     </>   : ""}
     {/* <>
      <div className="Counter"> Counter: {globalState.counter.value}</div>
      <div>
        <button className="btn" onClick={handleDecreaseClick}>decrease -</button>
        <button className="btn" onClick={handleIncreaseClick}>increase +</button>
      </div>
     </> */}
      <div>
        <button className="btn" onClick={handleToggleLogin}>{globalState.auth.isLogged === false ? "login" : "logout"}</button>
      </div> 
    </div>
  );
}

export default App;
