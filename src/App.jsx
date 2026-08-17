import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Shop from "./components/shop/Shop";
import Service from "./components/service/Service";
import About from "./page/About";
import Contact from "./components/contact/Contact";
import { useLocation } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";

const App = () => {
  const location = useLocation();
  const NottopBottom =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!NottopBottom && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      {!NottopBottom && <Footer />}
    </>
  );
};

export default App;
