import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import LocalStUsedButton from "./components/localStUsedButton";


const App = () =>

    (
        <>
            <h1>Max Mustermann</h1>
            <div className="container">
                <Timeline/>
                <Toolbox/>
            </div>
            <Screenshot/>
            <LocalStUsedButton/>
        </>
    );

export default App;