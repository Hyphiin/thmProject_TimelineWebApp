import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBirthdayCake,
    faAddressBook,
    faAmbulance,
    faWineBottle,
    faAnchor,
    faAtom,
    faBaby,
    faBaseballBall,
    faBasketballBall,
    faFootballBall,
    faShoppingBag,
    faBatteryEmpty,
    faBatteryFull,
    faBook
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import {hoverButton, hoverExitButton} from "./Animation";

class IconInsert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: this.props.icon
        }
    }

    setIcon(icon) {
        this.setState({
            icon: icon
        });
        localStorage.setItem('icon', icon.iconName);
        console.log(icon);
    }

    /* Animation */
    componentDidMount() {
        let tl = gsap.timeline();
        console.clear();
        console.log( this.iconA);
        tl.from(this.iconA, {duration: 2, delay: -0.8, opacity: 0, scale: 0.9})
    }

    render() {
        return  <div ref={ e => this.iconA = e } className="icon">
            <div className="iconselect">
                <FontAwesomeIcon onMouseEnter={e => hoverButton(e)}
                                 onMouseOut={e => hoverExitButton(e)} ref={ e => this.iconA = e }
                                 className="icon" style={{ margin: '5px' }} icon={faCoffee} onClick={() => this.setIcon(faCoffee)}/>
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBirthdayCake} onClick={() => this.setIcon(faBirthdayCake)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAnchor} onClick={() => this.setIcon(faAnchor)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAddressBook} onClick={() => this.setIcon(faAddressBook)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAmbulance} onClick={() => this.setIcon(faAmbulance)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faWineBottle} onClick={() => this.setIcon(faWineBottle)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAtom} onClick={() => this.setIcon(faAtom)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBaby} onClick={() => this.setIcon(faBaby)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBaseballBall} onClick={() => this.setIcon(faBaseballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBasketballBall} onClick={() => this.setIcon(faBasketballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faFootballBall} onClick={() => this.setIcon(faFootballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faShoppingBag} onClick={() => this.setIcon(faShoppingBag)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBatteryEmpty} onClick={() => this.setIcon(faBatteryEmpty)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBatteryFull} onClick={() => this.setIcon(faBatteryFull)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBook} onClick={() => this.setIcon(faBook)} />
            </div>
        </div>;
    }
}

export default IconInsert;
