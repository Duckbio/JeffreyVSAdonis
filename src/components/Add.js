import React from "react";
import '../Add.css';
import plus from "../images/plus.png";
var val = 0;

function Add(props) {
    function add() {
        val += props.value;
        props.setValueOfAdd(val);
        console.log(val);
    }
    return (
        <div className="buttons">
            <label>{props.description}</label>
            <button onClick={add} type="submit"><img src={plus} alt="plus"></img></button>
        </div>
    );
}

export default Add;