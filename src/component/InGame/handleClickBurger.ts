import classes from "../../assets/css/InGame.module.scss";
import {RefObject} from "react";
export const handleClickBurger=(e:any, game:RefObject<HTMLInputElement>, cash:RefObject<HTMLInputElement>)=>{
    if(game &&cash&&cash.current&&game.current) {
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