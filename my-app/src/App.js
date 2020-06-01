import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import LocalStUsedButton from "./components/localStUsedButton";
import LocalStorageSave from "./components/LocalStorageSave";



class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        entries: this.props.entries
                }
        }

            
        clickHandler(nu){
                LocalStorageSave();
                this.setState({
                        entries: nu
                });
        }

        render() {
                return <>
                        <h1>Max Mustermann</h1>
                        <div className="container" onClick={()=>this.clickHandler("jo")}>
                                <Timeline/>
                                <Toolbox/>
                        </div>
                        <Screenshot/>
                        <LocalStUsedButton/>
                </>
        }
}
export default App;