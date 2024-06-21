import React from "react"
import SignUp from "./pages/signUp/signUp"
import SignIn from "./pages/signIn/signIn"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
