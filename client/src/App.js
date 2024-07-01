import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home.jsx"; 
import Single from "./components/pages/single/Single.jsx";
import Write from "./components/pages/write/Write.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context.js";


function App() {
  const {user}=useContext(Context);
  return (
    <Router>
    <Topbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/register" element={user ?<Home/>: <Register />} />
    <Route path="/login" element={user ?<Home/>:<Login />} />
    <Route path="/settings" element={user ?<Settings/>:<Register />} />
    <Route path="/write" element={user ?<Write/>:<Register />} />
    <Route path="/post/:postId" element={<Single />} />
    </Routes>

    </Router>
  );
}

export default App;
