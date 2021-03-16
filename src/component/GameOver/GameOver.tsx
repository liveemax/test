import React from "react";
import {Link} from "react-router-dom";
import hand from "../../assets/img/hand.svg";
import classes from "../../assets/css/gameOver.module.scss"



export const GameOver:React.FC<any> = ():any =>{
return(
    <div className={classes.root}>
        <div className={classes.item}>
            <img src={hand} alt="hand" />
        </div>
        <div className={classes.item}>
            <div className={classes.total}>Total score:</div>
            <div className={classes.earned}>$8,000 earned</div>
            <div>
                <Link to={"/game"}><button className={classes.end}>Try again</button></Link>
            </div>
        </div>
        <button className={classes.lang}>eng</button>
    </div>
)
}