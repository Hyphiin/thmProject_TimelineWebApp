import React from "react";

const TimeLineItem = ({entries}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{background: entries.category.color}}>
                {entries.category.tag}
            </span>
            <time>{entries.date}</time>
            <p>{entries.text}</p>
            <div className="circles">
                <span className="circle1"/>
                <span className="circle2"/>
                <span className="circle3"/>
            </div>
        </div>
    </div>

);
export default TimeLineItem;