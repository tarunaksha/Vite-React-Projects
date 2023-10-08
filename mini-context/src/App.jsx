import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context API with some examples</h1>
      <div className="center-div">
        <Login />
      </div>
      <div className="center-div">
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
