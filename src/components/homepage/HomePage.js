import React from "react";
import "./HomePage.css";

import SignUp from "../auth/signup/signUp";

const HomePage = () => {
  return (
    <div>
      <SignUp />
      {/* <img
        src="https://images.unsplash.com/photo-1623265300797-4a3541e29a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Home Page Background"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          objectFit: "cover",
        }}
      /> */}
    </div>
  );
};

export default HomePage;
