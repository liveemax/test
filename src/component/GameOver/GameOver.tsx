import React, {useContext} from "react";
import {Link, Redirect} from "react-router-dom";
import hand from "../../assets/img/hand.svg";
import classes from "../../assets/css/gameOver.module.scss"
import {StoreContext} from "../../index";
import {handleClickOver} from "./handleClickOver";
import {observer} from "mobx-react-lite";



export const GameOver = observer(() =>{
    let store=useContext(StoreContext)
return(
    <div className={classes.root}>
        <div className={classes.item}>
            <img src={hand} alt="hand" />
        </div>
        <div className={classes.item}>
            <div className={classes.total}>Total score:</div>
            <div className={classes.earned}>{store.money[store.cash]} earned</div>
            <div>
                <Link to={"/game"}><button className={classes.end} onClick={()=>handleClickOver(store)}>Try again</button></Link>
            </div>
        </div>
        <button className={classes.lang}>eng</button>
        {store.gameOver?"":<Redirect to={"/game"} />}
    </div>
)
})