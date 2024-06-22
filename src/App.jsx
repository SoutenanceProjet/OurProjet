import React from "react"
import SignUp from "./pages/signUp/signUp"
import SignIn from "./pages/signIn/signIn"
import MessageLeft from "./pages/message/messageLeft/messageLeft.jsx"
import MessageRight  from "./pages/message/messageRight/messageRight.jsx";
import Message from "./pages/message/message.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/m" element={<Message />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
