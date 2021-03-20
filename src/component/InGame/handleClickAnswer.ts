import classes from "../../assets/css/answer.module.scss"
import {store} from "../../store/store";

export const handleClickAnswer = (e: any,store:store) => {
    let variant = e.currentTarget.innerText.slice(1)
    e.currentTarget.className = ""
    e.currentTarget.offsetParent.classList.add(classes.freeze)
    e.currentTarget.classList.add(classes.selected)
    if (store.correct === variant) {
        let current = e.currentTarget
        let prom = new Promise((resolve) => {
            setTimeout(() => {
                current.className = ""
                current.classList.add(classes.correct)
                resolve(current)
            }, 1000)
        })
        prom.then(() => {
                setTimeout(() => {
                    if(store.cash===11)
                    {
                        store.toGameOver(true)                 ///////////////////////////////////////////////you have a million
                    }
                    else
                    {store.getData(store.cash+1)
                    current.offsetParent.classList.remove(classes.freeze)}
                }, 1000)
            }
        )
    } else {
        let current = e.currentTarget
        let prom = new Promise((resolve) => {
            setTimeout(() => {
                current.className = ""
                current.classList.add(classes.wrong)
                resolve("")
            }, 1000)
        })
        prom.then(() => {
                setTimeout(() => {
                    store.toGameOver(true)
                }, 1000)
            }
        )
    }
}