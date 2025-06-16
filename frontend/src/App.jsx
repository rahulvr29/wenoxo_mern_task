import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import TaskList from "./components/Tasks/TaskList";
import AddTask from "./components/Tasks/AddTask";
import EditTask from "./components/Tasks/EditTask";

// Optional: Auth guard example
const isAuthenticated = () => !!localStorage.getItem("token");

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/tasks"
            element={isAuthenticated() ? <TaskList /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-task"
            element={isAuthenticated() ? <AddTask /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit-task/:id"
            element={isAuthenticated() ? <EditTask /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
