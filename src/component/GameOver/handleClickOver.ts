import {store} from "../../store/store";

export const handleClickOver= (store:store)=>{
    store.getData(0).then(()=>{
        store.toGameOver(false)
    })
}