import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

import "./App.css";

function App() {

  return (
    <>
      <div>
        <nav>
          <ul className="nav-bar">
            <img src="./wolf-icon.jpg" alt="" />
            <h1>FangList</h1>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/<id>" element={<Notes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;