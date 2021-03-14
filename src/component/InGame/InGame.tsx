import React from "react";
import {Answer} from "./Answer";
import {DivAnswer} from "./DivAnswer";
import classes from "../../assets/css/InGame.module.scss"


export const InGame: React.FC = (): any => {
    return (
        <div className={classes.root}>
            <div className={classes.game}>
                <p>How old your elder brother was 10 years before you was born, mate?</p>
                <div className={classes.answer}>
                    <div className={classes.wrapper}>
                        <Answer/>
                        <Answer/>
                    </div>
                    <div className={classes.wrapper}>
                        <Answer/>
                        <Answer/>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}