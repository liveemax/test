let url = 'https://opentdb.com/api.php?amount=1&type=multiple'
export const  apiQuestions = async(difficulty:string,token:string)=> {
    let end_url=url+"&difficulty="+difficulty+"&token="+token+"&encode=base64"
    debugger
    let response = await fetch(end_url);
    let data = await response.json(); // читаем ответ в формате JSON


    /////////base64 to string


    data.results[0].correct_answer=atob(data.results[0].correct_answer)
    data.results[0].question=atob(data.results[0].question)
    data.results[0].incorrect_answers=data.results[0].incorrect_answers.map((el:any)=>{
        return atob(el)
    })
    ///////


    if(data.response_code===0)
    return data
    else
    {throw "whf...getAnswer Error"}
}