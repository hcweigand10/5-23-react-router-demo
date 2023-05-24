import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import NavTabs from "./components/NavTabs";

const App = () => {
  return (
    <BrowserRouter>
      <NavTabs/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
