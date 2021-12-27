import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import Card from "./components/itemCard/Card";
import Login from "./components/auth/login/login";

const App = () => {
  const title = "Shopping List";
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="displayItems" element={<Card title={title}></Card>} />
        <Route path="signup" element={<HomePage />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
};

export default App;
