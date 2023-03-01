import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import AddNewUser from "./Pages/AddNewUser";
import EditeUser from "./Pages/EditeUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userinfo" element={<AddNewUser />} />
        <Route path="/editeuser/:id" element={<EditeUser />} />
      </Routes>
    </div>
  );
}

export default App;
