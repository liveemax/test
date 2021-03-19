import {runInAction, makeObservable, observable, configure} from "mobx"
import {apiToken} from "../api/apiToken";
import {apiQuestions} from "../api/apiQuestions";
import {randomPosition} from "./function/randomPosition";

configure({ enforceActions: "always" })
export class store {
    question: string = ""
    answer: Array<any> = []
    correct: string = ""
    cash: number = 0
    difficulty: string = "easy"
    token: string = ""
    constructor() {
        makeObservable(this, {
            question: observable,
            answer: observable,
            correct: observable,
            cash: observable,
            difficulty: observable,
            token: observable,
        })
    }
    async getData(cash:number){
        try {
            let data=await apiQuestions(this.difficulty,this.token)
        data.results[0].incorrect_answers.push(data.results[0].correct_answer)
        let ans=randomPosition(data.results[0].incorrect_answers) //array have 4 questions
        runInAction(()=>{
            this.correct = data.results[0].correct_answer
            this.question=data.results[0].question
            this.answer=(ans)
            this.cash=++cash
        })
        } catch (e) {
            alert(e)
        }
    }
    async getToken () {
        try {
             const token= await apiToken()
             if(token.response_code===0) {
                 runInAction(()=>{
                     this.token = token.token
                 })
             }
            else
             {throw "whf...getToken Error"}
            this.getData(-1)
        } catch (e) {
            alert(e)
        }
    }
}