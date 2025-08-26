import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign_In from "@/screens/auth/sign_in";
import Sign_Up from "./screens/auth/sign_up";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Sign_In />} />
        <Route path="/register" element={<Sign_Up />} />
      </Routes>
    </Router>
  );
}

export default App;
