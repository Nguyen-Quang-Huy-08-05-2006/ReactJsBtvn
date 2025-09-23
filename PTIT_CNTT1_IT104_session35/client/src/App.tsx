import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";        
import TodoApp from "./components/TodoApp";          
import ProductList from "./components/ProductList";  
import Cart from "./components/Cart";              
import LoginForm from "./components/LoginForm";      
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/" element={<UserList />} />
            <Route path="/" element={<TodoApp />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/" element={<Cart />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/" element={<RegisterForm />} />
            <Route            />
          </Routes>
    </Router>
  );
}

export default App;
