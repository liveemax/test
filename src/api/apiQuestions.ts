let url = 'https://opentdb.com/api.php?amount=1&type=multiple'
export const  apiQuestions = async(difficulty:string,token:string)=> {
    let end_url=url+"&difficulty="+difficulty+"&token="+token
    let response = await fetch(end_url);
    let data = await response.json(); // читаем ответ в формате JSON
    if(data.response_code===0)
    return data
    else
    {throw "whf...getAnswer Error"}
}