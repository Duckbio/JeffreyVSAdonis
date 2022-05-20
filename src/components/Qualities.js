import React from "react";
import '../Qualities.css';
import generate from "../generateASCII";

function Add(props) {
    return (
        <div className="qualities">
            <h3>{props.description}</h3>
            <div className="bar">{generate('⬛⬜', 10, props.value/10)}</div>
        </div>
    );
}

export default Add;