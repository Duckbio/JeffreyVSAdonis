import React from "react";
import '../Add.css';
import plus from "../images/plus.png";

function Add(props) {
    var val = 0;
    function add() {
        val += props.value;
    }
    return (
        <div className="buttons">
            <label>{props.description}</label>
            <button onClick={add} type="submit"><img src={plus} alt="plus"></img></button>
        </div>
    );
}

export default Add;