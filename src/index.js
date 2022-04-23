import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Navbar } from "./components/navbar/navbar";
import { Projects } from "./components/projets/projects";
import { Resume } from "./components/resume/resume";
import "../src/index.css"

function Portfolio() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<About/>} />
        <Route path='/resume' element ={<Resume/>} />
        <Route path='/projects' element ={<Projects/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
      </div>
  );
}

createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Portfolio />
</BrowserRouter>
);
