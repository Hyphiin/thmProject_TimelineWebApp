import gsap from "gsap";
import LocalStorageSave from "./LocalStorageSave";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBirthdayCake, faPlus,
} from "@fortawesome/free-solid-svg-icons";

/*Animation für Timeline*/
export const tlAnimationRight = node => {
    gsap.from(node, {delay: 0.3, duration: 1, y: 200, ease: "back.out(1)", opacity: 0})
};

/*Animation für Timeline erscheinen*/
export const timelineStagger = () => {
    let tl = gsap.timeline();
    tl.from(".timeline-item-content", {
        delay: -0.5,
        duration: 0.8,
        scale: 0.1,
        y: -400,
        ease: "back.out(1)",
        stagger: {
            grid: "auto",
            from: "end",
            axis: "y",
            ease: "power1.inOut",
            amount: 0.3
        }
    });
};

/*Timeline Linie Animation */
export const timelineLine = () => {
    gsap.from(".timeline-container",{
        duration: 1,
        y:400,
        ease: "power1.inOut"
    })
};

/* Animation beim wechseln der Timeline */
export const timelinePrev = () => {
    gsap.from(".timeline-container",{
        duration: 0.8,
        scale: 1.6,
        ease: "back.out(1)"
    })
};

/*Animation für Item add/delete/change */
export const itemStagger = () => {
    let arrayOfItems = document.getElementsByClassName("timeline-item");
    let item = arrayOfItems[1].id.toString();
    console.log(item);
    gsap.to("#"+item,{scale:5});
};



/*Animation für orange Circles, erscheinen*/
export const circlesStagger = () => {
    let tl = gsap.timeline();
    tl.from(".circle1", {
        delay: -0.5,
        duration: 2,
        scale: 0.1,
        y: 40,
        ease: "power1.inOut",
        stagger: {
            grid: "auto",
            from: "center",
            amount: 0.2
        }
    });
    tl.from(".circle2", {
        delay: -2,
        duration: 2,
        scale: 0.1,
        y: -40,
        ease: "power1.inOut",
        stagger: {
            grid: [7,15],
            from: "center",
            amount: 0.2
        }
    });
    tl.from(".plus1", {
        delay:-2.3,
        duration: 2,
        scale: 0.1,
        y: 40,
        ease: "power1.inOut",
        stagger: {
            grid: "auto",
            from: "center",
            amount: 0.2
        }
    });
    tl.from(".plus2", {
        delay: -2.3,
        duration: 2,
        scale: 0.1,
        y: -40,
        ease: "power1.inOut",
        stagger: {
            grid: [7,15],
            from: "center",
            amount: 0.2
        }
    });
};


/*Animation hover on TimelineItem
export const timelineContentAON = (node1 ,node2 ,node3) => {
    let tl = gsap.timeline();
    tl.to(node1,{
        delay: -0.5,
        duration: 0.3,
        scale: 1.05,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
    tl.to(node2,{
        delay: -0.5,
        duration: 0.3,
        scale: 1.05,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
    tl.to(node3,{
        delay: -0.5,
        duration: 0.3,
        scale: 1.05,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });

};
*/

/*Animation hover off TimelineItem
export const timelineContentAOFF = (node1 ,node2 ,node3) => {
    let tl = gsap.timeline();
    tl.to(node1,{
        delay: -0.5,
        duration: 0.3,
        scale: 1,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });
    tl.to(node2,{
        delay: -0.5,
        duration: 0.3,
        scale: 1,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });
    tl.to(node3,{
        delay: -0.5,
        duration: 0.3,
        scale: 1,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });

};
*/

/* Animation beim adden einer neuen Items

export const ItemAdd = () => {
    gsap.to(".timeline-item-content", {
        delay: -0.5,
        duration: 1,
        scale: 1,
        x: -40,
        ease: "bounce",
    });
}
*/




/* wenn man auf eintrag bearbeiten/löschen klickt */
export const clickButtonEdit = e => {
    gsap.to(".timeline-item-content .circle3", {
        duration: 1,
        scale: 1.5,
        backgroundColor: "#f8cf25",
        ease: "power1.inOut"
    });
}

/* wenn man auf eintrag erstellen klickt */
export const clickButtonAdd = e => {
    gsap.to(".timeline-item-content .circle1", {
        duration: 1,
        scale: 1.5,
        backgroundColor: "#f8cf25",
        ease: "power1.inOut",
    });
    gsap.to(".timeline-item-content .circle2", {
        duration: 1,
        scale: 1.5,
        backgroundColor: "#f8cf25",
        ease: "power1.inOut"
    });


}

/* wenn man auf mittleren circle klickt */
export const clickCircleMid = () => {
    gsap.to(".timeline-item-content .circle3", {
        duration: 1,
        scale:1,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
}

/* wenn man auf die anderen circle klickt */
export const clickCircle = () => {
    gsap.to(".timeline-item-content .circle1", {
        duration: 1,
        scale:1,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
    gsap.to(".timeline-item-content .circle2", {
        duration: 1,
        scale:1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });

}


export const clickPlus = () => {
    gsap.to(".timeline-item-content .circle1", {
        duration: 1,
        scale:1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
    gsap.to(".timeline-item-content .circle2", {
        duration: 1,
        scale:1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
}

/* wenn man auf ein icon klickt */
let current = "";
let before = "#muell";

export const clickIcon = (e) => {
    current = e.target;
    gsap.to(e.target, {
        color:"#f56e47",
    });
    gsap.to(before, {
        color:"#000000",
    });
    before = current;
}



// Hover on the circle mid
export const hoverCircleMid = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.3,
        backgroundColor: "#f8cf25",
        ease: "power1.inOut"
    });
};

// Hover off the circle mid
export const hoverExitCircleMid = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
};
// Hover on the circle außen
export const hoverCircle = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.3,
        backgroundColor: "#f8cf25",
        ease: "power1.inOut"
    });
};

// Hover off the circle außen
export const hoverExitCircle = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
};

/*
// Hover on the plus
export const hoverPlus = (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.3,
        backgroundColor: "#f8cf25",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        ease: "power1.inOut",
        top: "calc(50% + 30px)",
    });
};

// Hover off the plus
export const hoverExitPlus = (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        ease: "power1.inOut",
    });

};
*/


// Hover on the Header
export const hoverItem = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.2,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
};

// Hover off the Header
export const hoverExitItem = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "#004f6e",
        ease: "power1.inOut"
    });
};

// Hover on the Button
export const hoverButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",

    });
};

// Hover off the Button
export const hoverExitButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });
};

// Hover on the Pfeil
export const hoverPfeil = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",

    });
};

// Hover off the Pfeil
export const hoverExitPfeil = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#004f6e",
        ease: "power1.inOut"
    });
};

// Hover on the Pfeil
export const hoverErstellenButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",
    });
};

// Hover off the Pfeil
export const hoverExitErstellenButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
};


/* Hover on the TimelineItem
export const hoverTimelineItem = (e) => {
    gsap.to(e.target,{
        duration: 0.3,
        scale: 1.05,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    })
};
 */

/* Hover off the TimelineItem
export const hoverExitTimeline = e => {
    gsap.to(e.target,{
        duration: 0.3,
        scale: 1.00,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    })
};
 */




