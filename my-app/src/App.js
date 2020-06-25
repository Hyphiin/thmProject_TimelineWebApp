import React from 'react';
import './App.css';
import TimeLine from "./components/TimeLine";
import LocalStorageSave from "./components/LocalStorageSave";
import {circlesStagger, timelineLine} from "./components/Animation";
import MenuContainer from "./components/MenuContainer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }


    clickHandler(nu) {
        LocalStorageSave();
        this.setState({
            entries: nu
        });
    }

    componentDidMount() {
        console.clear();
        timelineLine();
        circlesStagger();
    }

    render() {
        return <>
            <h1 className="headline">React Lebenslauf</h1>
            <div className="container" onClick={() => this.clickHandler("jo")}>
                <TimeLine/>
                <MenuContainer/>
            </div>
        </>
    }
}

export default App;