import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Lecture';
import { TaskStatus} from './Lecture';
import { useState, useRef, useEffect } from "react";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
        <TaskStatus/>
      </header>
    </div>
    </>
  );
}

export default App;
