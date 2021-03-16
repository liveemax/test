import classes from "../../assets/css/answer.module.scss"
import React from "react";

export const Answer:React.FC=():any=>{

    return (
        <div className={classes.root}>
            <div className={classes.inactive}>
                <div className={classes.text}>
                    <span>A</span>
                    <span>Answer</span>
                </div>
            </div>
        </div>
    )
}