import Login from "./components/Login"
import Signup from "./components/Signup"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={< Signup/>}/>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
