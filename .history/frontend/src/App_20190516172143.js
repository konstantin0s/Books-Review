import React from 'react';
import './App.css';
import Books from './components/Books';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Books />
    </div>
  );
}

export default App;
