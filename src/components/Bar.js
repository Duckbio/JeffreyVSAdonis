import React, {useRef, useState, useEffect} from "react";
import '../Bar.css';
import GoldAdonisImg from "../images/adonisgold.png"
import PurpleAdonisImg from "../images/adonispurple.png"
import DiscipleImg from "../images/disciple.png"
import JeffreyImg from "../images/jeffrey.png"
import TrueJeffreyImg from "../images/truejeffrey.png"
import data from "../data";

function Bar({valueOfAdd}) {
    const listRef = useRef();
    const trueJeffreyRef = useRef();
    const [width, setWidth] = useState();
    const [margin, setMargin] = useState();
    const getListSize = () => {
        const newWidth = listRef.current.clientWidth;
        setWidth(newWidth);
    };
    const getMarginSize = () => {
        const newMargin = (width - (4 * trueJeffreyRef.current.clientWidth)) / 4;
        console.log(width);
        setMargin(newMargin);
    };
    useEffect(() => {
        window.addEventListener("resize", getListSize());
        window.addEventListener("resize", getMarginSize());
    }, []);
    var actualValue = 0;
    actualValue += valueOfAdd;
    var total = 0;
    data.forEach(element => {
        if(element.positive === true) {
            total+=element.value;
        }
    });
    var i = total / 4
    var x = [1, 2, 3];
    var y = x.map(d => (d * i).toFixed(0));
    return (
        <div className="main">
            <div className="imgs">
                <img src={TrueJeffreyImg} id="trueJeffrey" ref={trueJeffreyRef} style={{marginRight: margin + 'px'}}></img>
                <img src={JeffreyImg} id="jeffrey" style={{marginRight: margin + 'px'}}></img>
                <img src={DiscipleImg} id="disciple" style={{marginRight: margin + 'px'}}></img>
                <img src={PurpleAdonisImg} id="purpleAdonis" style={{marginRight: margin + 'px'}}></img>
                <img src={GoldAdonisImg} id="goldAdonis" style={{marginRight: margin + 'px'}}></img>
            </div>
            <meter id="bar" value={actualValue} min="0" max={total} optimum={total} ref={listRef}></meter>
            <div className="values">
                <span id="zero">0</span>
                <span id="twentyfive">{y[0]}</span>
                <span id="fifty">{y[1]}</span>
                <span id="seventyfive">{y[2]}</span>
                <span id="onehundred">{total}</span>
            </div>
        </div>
    );
}

export default Bar;