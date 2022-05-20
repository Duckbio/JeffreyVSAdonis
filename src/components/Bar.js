import React from "react";
import '../Bar.css';
import GoldAdonisImg from "../images/adonisgold.png"
import PurpleAdonisImg from "../images/adonispurple.png"
import DiscipleImg from "../images/disciple.png"
import JeffreyImg from "../images/jeffrey.png"
import TrueJeffreyImg from "../images/truejeffrey.png"

function Bar() {
    return (
        <div className="main">
            <div className="imgs">
                <img src={TrueJeffreyImg} id="trueJeffrey"></img>
                <img src={JeffreyImg} id="jeffrey"></img>
                <img src={DiscipleImg} id="disciple"></img>
                <img src={PurpleAdonisImg} id="purpleAdonis"></img>
                <img src={GoldAdonisImg} id="goldAdonis"></img>
            </div>
            <meter id="bar" value="50" min="0" max="100" optimum="100"></meter>
            <div className="values">
                <span id="zero">0</span>
                <span id="twentyfive">25</span>
                <span id="fifty">50</span>
                <span id="seventyfive">75</span>
                <span id="onehundred">100</span>
            </div>
        </div>
    );
}

export default Bar;