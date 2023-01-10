import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Route>
      {/* <Route exact path='/welcome' element={<MainPageContainer />} /> */}
    </Routes>
  );
}

export default App;
