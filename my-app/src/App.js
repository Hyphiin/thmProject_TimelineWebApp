import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";

const App = () => (
    <>
        <h1>Max Mustermann</h1>
        <div className="container">
        <Timeline/>
        <Toolbox/>
        </div>
    </>
);

export default App;