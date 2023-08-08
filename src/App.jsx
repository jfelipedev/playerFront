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
        <Route path="/playerFront" element={<Home />}></Route>
        <Route path="/playerFront/login" element={<Login />}></Route>
        <Route path="/playerFront/register" element={<Register />}></Route>
        <Route path="/playerFront/create-character" element={<CreateSheet />}></Route>
        <Route path="/playerFront/update-character" element={<UpdateSheet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
