import React from "react";
import {Link} from "react-router-dom";
import hand from "../../assets/img/hand.svg";


export const GameOver:React.FC<any> = ():any =>{
return(
    <div>
        <div>
            <img src={hand} alt="hand" />
        </div>
        <div>
            <div>Total score:</div>
            <div>$8,000 earned</div>
            <div>
                <Link to={"/"}><button>Try again</button></Link>
            </div>
        </div>
    </div>
)
}