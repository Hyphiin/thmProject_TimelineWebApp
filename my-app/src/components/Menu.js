import React, { Component } from "react";
import "./test.css";
import Toolbox from "./toolBox";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                 className={visibility}>
                <Toolbox/>
                <button className="toggle-button" onMouseDown={this.props.handleMouseDown}>
                    <div className="toggle-button__line" />
                    <div className="toggle-button__line" />
                    <div className="toggle-button__line" />
                </button>
            </div>
        );
    }
}

export default Menu;