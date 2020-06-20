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
    faBook,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import {clickButtonAdd, clickIcon, hoverButton, hoverExitButton} from "./Animation";

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

        function IconClick() {

        }
    }

    render() {
        return  <div ref={ e => this.iconA = e } className="icon">
            <div className="iconselect">
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faCoffee} onClick={() => this.setIcon(faCoffee)}/>
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBirthdayCake} onClick={() => this.setIcon(faBirthdayCake)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faAnchor} onClick={() => this.setIcon(faAnchor)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faAddressBook} onClick={() => this.setIcon(faAddressBook)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faAmbulance} onClick={() => this.setIcon(faAmbulance)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faWineBottle} onClick={() => this.setIcon(faWineBottle)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faAtom} onClick={() => this.setIcon(faAtom)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBaby} onClick={() => this.setIcon(faBaby)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBaseballBall} onClick={() => this.setIcon(faBaseballBall)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBasketballBall} onClick={() => this.setIcon(faBasketballBall)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faFootballBall} onClick={() => this.setIcon(faFootballBall)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faShoppingBag} onClick={() => this.setIcon(faShoppingBag)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBatteryEmpty} onClick={() => this.setIcon(faBatteryEmpty)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBatteryFull} onClick={() => this.setIcon(faBatteryFull)} />
                <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faBook} onClick={() => this.setIcon(faBook)} />
                <span>Ausgewähltes Icon: <FontAwesomeIcon style={{ margin: '5px' }} icon={localStorage.getItem('icon')} /></span>
                <span>Kein Icon: <FontAwesomeIcon id="einzelIcon" style={{ margin: '5px' }} icon={faTrash} onClick={() => this.setIcon("null")} /></span>
            </div>
        </div>;
    }
}

export default IconInsert;
