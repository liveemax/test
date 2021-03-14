import React from "react";
import classes from "../../assets/css/answer.module.scss"


export const Answer:React.FC=():any=> {
    return (
        <div className={classes.rootHr}>
            <hr />
            <button  className={classes.root}>Answer</button>
        </div>
    )
}