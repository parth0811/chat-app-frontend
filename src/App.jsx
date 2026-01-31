import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ChatPage from "./Pages/ChatPage.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/chat" element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
