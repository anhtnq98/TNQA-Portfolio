import { Routes, Route } from "react-router-dom";
import Header from "./navigators/Header";
import ChooseLanguage from "./navigators/ChooseLanguage";
import BackToTop from "./navigators/BackToTop";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./navigators/Footer";
import "./style/App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
      <ChooseLanguage />
      <BackToTop />
    </>
  );
}

export default App;
