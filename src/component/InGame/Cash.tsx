import React from "react";
import classes from "../../assets/css/cash.module.scss";
import inactive from "../../assets/img/cash/inactive.png";
import active from "../../assets/img/cash/active.png";

export const Cash:React.FC=():any=>{
        return(
            <div className={classes.root}>
                    <div className={classes.inactive}>
                        <img src={inactive} alt=""/>
                                    <span className={classes.prev}>$100000</span>
                    </div>
            </div>)
}
