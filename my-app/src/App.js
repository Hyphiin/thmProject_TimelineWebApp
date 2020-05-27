import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import localStorageCall from "./components/localStorageCall";

const App = () => (
    <>

        <h1>Max Mustermann</h1>
        <div className="container">
        <Timeline/>
        <Toolbox/>
        </div>
        <Screenshot/>
        <localStorageCall/>
   </>


);


export default App;