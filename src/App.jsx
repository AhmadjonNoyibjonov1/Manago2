
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detailes from "./pages/Detailes";
import MainLoyaut from "./loyauts/MainLoyaut";
import { ThemeProvider } from "./context/ThemeContext";
import Folder from "./pages/Folder"

function App() {
  return (
    <ThemeProvider>
      <MainLoyaut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detailes" element={<Detailes />} />
          <Route path="/folders" element={<Folder />} />
        </Routes>
      </MainLoyaut>
    </ThemeProvider>
  );
}

export default App;

