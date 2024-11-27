import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AddItem from "../components/AddItem";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
