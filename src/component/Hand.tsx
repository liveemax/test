import React from "react";
import Star from './../assets/img/star.svg';
import Like from './../assets/img/like.svg';

export const Hand:React.FC=():any=>{
    return (
        <div>
            <img src={Like} alt="Like" />
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
        </div>
    )
}