import React, { Component } from "react";
import './OffCanvas.css';

class MenuButton extends Component {
    render() {
        return (
        <button className="toggle-button" onMouseDown={this.props.handleMouseDown}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
        );
    }
}

export default MenuButton;