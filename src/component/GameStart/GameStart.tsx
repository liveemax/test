import React from "react";
import triangle from "../../assets/img/triangle.png";
import {Link} from "react-router-dom";
import hand from './../../assets/img/hand.svg';
import classes from "../../assets/css/gameStart.module.scss"


export const GameStart:React.FC<any> = ():any =>{
return(
    <div className={classes.root}>
        <div  className={classes.hand}>
            <img src={hand} alt="hand" />
        </div>
        <div  className={classes.ask}>
            <p>Who wants to be a millionaire?</p>
            <div>
                <Link to={"/game"}><button className={classes.start}>Start</button></Link>
            </div>
        </div>
        <button className={classes.lang}>eng</button>
        <img className={classes.triangle} src={triangle} alt="" />
    </div>

)
}