import "./App.scss";
import Nav from "./components/partials/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import AddWorld from "./components/AddWorld";
import CreatePlaylist from "./components/CreatePlaylist";
import Playlist from "./components/partials/Playlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/playlist/create" element={<CreatePlaylist />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/playlist/:id/addworld" element={<AddWorld />} />
      </Routes>
    </div>
  );
}

export default App;
