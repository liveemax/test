import React from "react";
import {Answer} from "./Answer";
import classes from "../../assets/css/InGame.module.scss"
import {Cash} from "./Cash";
import {Link} from "react-router-dom";

export const InGame: React.FC = (): any => {
    return (
        <div className={classes.root}>
            <div className={classes.game}>
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
            <div className={classes.cash_wrapper}>
                <Cash/>
                <Cash/>
                <Cash/>
                <Cash/>
            </div>
        </div>
    )
}