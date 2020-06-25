import gsap from "gsap";
import React from "react";

/*Animation für TimeLine*/
export const tlAnimationRight = node => {
    gsap.from(node, {delay: 0.3, duration: 1, y: 200, ease: "back.out(1)", opacity: 0})
};

/*Animation für TimeLine erscheinen*/
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

/*TimeLine Linie Animation */
export const timelineLine = () => {
    gsap.from(".timeline-container", {
        duration: 1,
        y: 400,
        ease: "power1.inOut"
    })
};

/* Animation beim wechseln der TimeLine */
export const timelinePrev = () => {
    gsap.from(".timeline-container", {
        duration: 0.8,
        scale: 1.6,
        ease: "back.out(1)"
    })
};

/*Animation für Item add/change */
export const itemStagger = () => {
    let arrayOfItems = document.getElementsByClassName("timeline-item");
    let i = parseInt(localStorage.getItem("lastAdd"), 10);
    //console.log(i);
    if (arrayOfItems.length === i) {
        let item = arrayOfItems[arrayOfItems.length + 1];
        //console.log(item);
        gsap.from(item, {
            duration: 0.8,
            scale: 1.6,
            ease: "back.out(1)"
        });
    } else {
        let item = arrayOfItems[i];
        //console.log(item);
        gsap.from(item, {
            duration: 0.8,
            scale: 1.6,
            ease: "back.out(1)"
        });
    }
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
            grid: [7, 15],
            from: "center",
            amount: 0.2
        }
    });
    tl.from(".plus1", {
        delay: -2.3,
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
            grid: [7, 15],
            from: "center",
            amount: 0.2
        }
    });
};

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
        scale: 1,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
}

/* wenn man auf die anderen circle klickt */
export const clickCircle = () => {
    gsap.to(".timeline-item-content .circle1", {
        duration: 1,
        scale: 1,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
    gsap.to(".timeline-item-content .circle2", {
        duration: 1,
        scale: 1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });

}


export const clickPlus = () => {
    gsap.to(".timeline-item-content .circle1", {
        duration: 1,
        scale: 1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
    gsap.to(".timeline-item-content .circle2", {
        duration: 1,
        scale: 1,
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
        color: "#f56e47",
    });
    gsap.to(before, {
        color: "#000000",
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

// Hover on Button
export const hoverButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",
    });
};

// Hover off Button
export const hoverExitButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });
};

// Hover on Pfeil
export const hoverArrow = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",

    });
};

// Hover off Pfeil
export const hoverExitArrow = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#004f6e",
        ease: "power1.inOut"
    });
};


// Hover on Erstellen Button
export const hoverCreateButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.05,
        border: "#f56e47",
        backgroundColor: "#f56e47",
        ease: "power1.inOut",
    });
};

// Hover off Erstellen Button
export const hoverExitCreateButton = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
};