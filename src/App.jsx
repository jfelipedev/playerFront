import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateSheet from "./components/CreateSheet";
import UpdateSheet from "./components/UpdateSheet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/create-character" element={<CreateSheet />}></Route>
        <Route path="/update-character" element={<UpdateSheet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
