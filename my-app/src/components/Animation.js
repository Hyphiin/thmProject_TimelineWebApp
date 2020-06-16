import gsap from "gsap";

/*Animation für Timeline*/
export const tlAnimationRight = node => {
    gsap.from(node, {delay: 0.3, duration: 1, y: 200, ease: "back.out(1)", opacity: 0})
};

/*Animation für Timeline erscheinen*/
export const timelineStagger = () => {
    let tl = gsap.timeline();
    tl.from(".timeline-item-content", {
        delay: -0.5,
        duration: 2,
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
}

/*Animation für orange Circles, erscheinen*/
export const circlesStagger = (node1, node2) => {
    let tl = gsap.timeline();
    tl.from(node1, {
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
    tl.from(node2, {
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



// Hover on the circle
export const hoverCircle = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.3,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
};

// Hover off the circle
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

/*versucht Timeline Linie zu animieren...klappt noch nicht*/
export const timelineLine = () => {
    gsap.from(".timeline-container::after",{
        duration: 2,
        y:-800,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    })
};

export const doCoolStuff = (node) =>{
       node.reversed(!(node).reversed());
}

