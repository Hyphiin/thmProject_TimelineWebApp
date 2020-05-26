import gsap from "gsap";
import TimeLineItem from "./timeLineItem";
import entry from "./entries";

export const ersteAnimation = node => {
    gsap.from(node,{duration:2, y:0, rotate:360})
};

export const h1Animation = node => {
    let tl = gsap.timeline();
    tl.from(node, {duration: 1, y: 200, ease:"circ.out", opacity: 0})
};

export const tlAnimationRight = node => {
    gsap.from(node, {delay: 0.3, duration: 1, x: +20, ease: "back.out(1)", opacity: 0})
};


export const circlesStagger = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 2,
        scale: 0.1,
        y: 40,
        ease: "power1.inOut",
        stagger: {
            grid: [7,15],
            from: "center",
            amount: 0.2
        }
    });
};

export const fadeInUp = node => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
};

export const toolboxFadeIn = node => {
    gsap.from(node, {
        x: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0.5,
        ease: "power3.inOut"
    });
}

// Hover on the circle
export const handleHoverCircle = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.3,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
};

// Hover off the circle
export const handleHoverExitCircle = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "#f56e47",
        ease: "power1.inOut"
    });
};

// Hover on the text
export const handleHoverItem = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.2,
        x:50,
        backgroundColor: "black",
        ease: "power1.inOut"
    });
};

// Hover off the text
export const handleHoverExitItem = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        x: 0,
        backgroundColor: "#42a6c6",
        ease: "power1.inOut"
    });
};