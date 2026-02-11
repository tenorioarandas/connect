import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyles.scss";
import Home from "./pages/home/Home";
import Donations from "./pages/donations/Donations";
import Volunteering from "./pages/volunteering/Volunteering";
import Mentoring from "./pages/mentoring/Mentoring";
import Lectures from "./pages/lectures/Lectures";
import User from "./pages/user/User";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
