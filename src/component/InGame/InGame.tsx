import React, {useRef} from "react";
import {Answer} from "./Answer";
import classes from "../../assets/css/InGame.module.scss"
import {Cash} from "./Cash";
import {Link} from "react-router-dom";

export const InGame: React.FC = (): any => {
    let game=useRef<HTMLInputElement>(null)
    let cash=useRef<HTMLInputElement>(null)
    let handleClick=(e:any)=>{
        if(game && game.current&&cash&&cash.current) {
            let current = e.currentTarget.classList[0]
            let currentClass = current.split("_")[1]
            e.currentTarget.classList.remove(current)
            if (currentClass === "close") {
                cash.current.className = ""
                e.currentTarget.classList.add(classes.burger)
                game.current.classList.add(classes.visible)
                cash.current.classList.add(classes.hidden)
                game.current.classList.add(classes.game)
            }
            if (currentClass === "burger") {
                game.current.className = ""
                e.currentTarget.classList.add(classes.close)
                game.current.classList.add(classes.hidden)
                cash.current.classList.add(classes.visible)
                cash.current.classList.add(classes.cash_wrapper)
            }
        }
    }

    return (
        <div className={classes.root}>
            <div ref={game} className={classes.game+" "+classes.visible}>
                <p>How old your elder brother was 10 years before you was born, mate?</p>
                <div className={classes.answer}>
                    <div className={classes.wrapper}>
                        <Link to={"/gameover"}><Answer /></Link>
                        <Link to={"/gameover"}><Answer /></Link>
                        <Link to={"/gameover"}><Answer /></Link>
                        <Link to={"/gameover"}><Answer /></Link>
                    </div>
                </div>
            </div>
            <div ref={cash} className={classes.cash_wrapper +" "+classes.hidden}>
                <Cash/>
                <Cash/>
                <Cash/>
                <Cash/>
            </div>
            <button onClick={(e)=>{handleClick(e)}} className={classes.burger}></button>
        </div>
    )
}