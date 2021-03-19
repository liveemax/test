import classes from "../../assets/css/answer.module.scss"
import React from "react";
type Answer={
    answer:string,
    letter:string
}
export const Answer:React.FC<Answer>=({letter,answer,...props})=>{
    return (
        <div className={classes.root}>
            <div className={classes.inactive}>
                <div className={classes.text}>
                    <span>{letter}</span>
                    <span>{answer}</span>
                </div>
            </div>
        </div>
    )
}