import classes from "../../assets/css/answer.module.scss"
import React, {useContext} from "react";
import {handleClickAnswer} from "./handleClickAnswer";
import {StoreContext} from "../../index";
type Answer={
    answer:string,
    letter:string
}
export const Answer:React.FC<Answer>=({letter,answer,...props})=>{
    let store=useContext(StoreContext)
    return (
        <div className={classes.root}>
            <div className={classes.inactive} onClick={(e:any)=>handleClickAnswer(e,store)}>
                <div className={classes.text}>
                    <span>{letter}</span>
                    <span>{answer}</span>
                </div>
            </div>
                </div>
    )
}