import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Registration } from "./pages/Registration";
import { PersonalInfo } from "./pages/PersonalInfo";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import { Home } from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route
              path="/personalInfo/*"
              element={
                <PrivateRoute>
                  <PersonalInfo />
                </PrivateRoute>
              }
            />
             <Route
              path="/home/:id"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
