import React from 'react';
import './App.css';
import Main from './Main/Main';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
