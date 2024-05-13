import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Product } from "./pages/product/Product";
import { Layout } from "./navigation/Layout";
import "./app.css"

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;
