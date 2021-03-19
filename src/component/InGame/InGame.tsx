import React, {useContext, useRef, useState} from "react";
import {Answer} from "./Answer";
import classes from "../../assets/css/InGame.module.scss"
import {Cash} from "./Cash";
import {Link} from "react-router-dom";
import {handleClickBurger} from "./handleClickBurger";
import {StoreContext} from "../../index";

export const InGame: React.FC = (): any => {
    let money=["$500","$1,000","$2,000","$4,000","$8,000","$16,000","$32,000","$64,000","$125,000","$250,000","$500,000","$1,000,000"];
    let [state,setState]=useState([])
    let game=useRef<HTMLInputElement>(null);let cash=useRef<HTMLInputElement>(null)
    let A=65;let store=useContext(StoreContext)
    return (
        <div className={classes.root}>
            <div ref={game} className={classes.game+" "+classes.visible}>
                <p>{store.question}</p>
                <div className={classes.answer}>
                    <div className={classes.wrapper}>
                        {
                            store.answer.map((el,ind,array) => {
                            return <Answer answer={store.answer[ind]} letter={String.fromCharCode(A+ind)} key={el}/>
                        })
                        }
                    </div>
                </div>
            </div>
            <div ref={cash} className={classes.cash_wrapper +" "+classes.hidden}>
                {money.map((el,index,ar)=>{
                        return <Cash  money={money[index]} key={el+index*Math.random()}/>
            }).reverse()}
            </div>
            <button onClick={(e)=>{handleClickBurger(e,game,cash)}} className={classes.burger}></button>
        </div>
    )
}