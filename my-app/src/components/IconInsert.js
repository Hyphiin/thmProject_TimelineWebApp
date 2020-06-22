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
import {clickButtonAdd, clickIcon, hoverButton, hoverExitButton, timelineStagger} from "./Animation";

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
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faCoffee} onClick={() => this.setIcon(faCoffee)} onClickCapture={e => clickIcon(e)} />
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBirthdayCake} onClick={() => this.setIcon(faBirthdayCake)} onClickCapture={e => clickIcon(e)} />
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faAnchor} onClick={() => this.setIcon(faAnchor)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faAddressBook} onClick={() => this.setIcon(faAddressBook)} onClickCapture={e => clickIcon(e)} />
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faAmbulance} onClick={() => this.setIcon(faAmbulance)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faWineBottle} onClick={() => this.setIcon(faWineBottle)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faAtom} onClick={() => this.setIcon(faAtom)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBaby} onClick={() => this.setIcon(faBaby)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBaseballBall} onClick={() => this.setIcon(faBaseballBall)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBasketballBall} onClick={() => this.setIcon(faBasketballBall)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faFootballBall} onClick={() => this.setIcon(faFootballBall)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faShoppingBag} onClick={() => this.setIcon(faShoppingBag)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBatteryEmpty} onClick={() => this.setIcon(faBatteryEmpty)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBatteryFull} onClick={() => this.setIcon(faBatteryFull)} onClickCapture={e => clickIcon(e)}/>
                <FontAwesomeIcon className="einzelIcon" style={{ margin: '5px' }} icon={faBook} onClick={() => this.setIcon(faBook)} onClickCapture={e => clickIcon(e)}/>
                <span>Kein Icon: <FontAwesomeIcon className="einzelIcon" id="muell" style={{ margin: '5px' }} icon={faTrash} onClick={() => this.setIcon("null")} onClickCapture={e => clickIcon(e)}/></span>
            </div>
        </div>;
    }
}

export default IconInsert;
