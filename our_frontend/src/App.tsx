import SignUp from "./pages/signUp/signUp"
import SignIn from "./pages/signIn/signIn"
import Message from "./pages/message/message";
import Setting from "./pages/setting/setting";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App(): any {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/message" element={<Message />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
