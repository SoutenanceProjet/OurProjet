import React from "react"
import SignUp from "./pages/signUp/signUp"
import SignIn from "./pages/signIn/signIn"
import FirstPart from "./components/messageRight/firstPart/firstPart";
import SecondPart from "./components/messageRight/secondPart/secondPart";
import MessageRight from "./components/messageRight/messageRight";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/f" element={<FirstPart />} />
          <Route path="/p" element={<SecondPart />} />
          <Route path="/m" element={<MessageRight />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
