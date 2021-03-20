import classes from "../../assets/css/InGame.module.scss";

export function updateSize(game:any,cash:any,store:any) {
    if(game &&cash&&cash.current&&game.current) {
        game.current.className = ""
        game.current.classList.add(classes.visible)
        game.current.classList.add(classes.game)
        cash.current.className = ""
        cash.current.classList.add(classes.cash_wrapper)
        store.setWidth(window.innerWidth)
        if(window.innerWidth<720){
            cash.current.classList.add(classes.hidden)
        }
    }

}