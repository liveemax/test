import React, {useContext,  useRef} from "react";
import {Answer} from "./Answer";
import classes from "../../assets/css/InGame.module.scss"
import {Cash} from "./Cash";
import {handleClickBurger} from "./handleClickBurger";
import {StoreContext} from "../../index";
import {observer} from "mobx-react-lite";
import {Redirect} from "react-router";

export const InGame=observer( (): any => {
    let game=useRef<HTMLInputElement>(null);
    let cash=useRef<HTMLInputElement>(null)
    let store=useContext(StoreContext)
    let A=65;
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
                {store.money.map((el,index,ar)=>{
                    if(index<store.cash)
                    {
                        return <Cash position={"past"} money={store.money[index]} key={el+index*Math.random()}/>
                    }
                else if(index>store.cash)
                    {return <Cash position={"future"} money={store.money[index]} key={el+index*Math.random()}/>}
                else
                    {return <Cash position={"active"} money={store.money[index]} key={el+index*Math.random()}/>}
            }).reverse()}
            </div>
            <button onClick={(e)=>{handleClickBurger(e,game,cash)}} className={classes.burger}></button>
            {store.gameOver?<Redirect to={"/gameOver"} />:""}
        </div>
    )
}
)