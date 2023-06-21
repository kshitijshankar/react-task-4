import React from 'react';
import Table from './table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'

function App() {
  return (
    <div className = "pt-5" id = "bg">
      <h1 className = "text-center">React Task-4</h1>
      <h1 className = "text-center">Records</h1>
      <Table />
    </div>
  );
}

export default App; 