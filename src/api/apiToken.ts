let url="https://opentdb.com/api_token.php?command=request"
export const  apiToken = async()=> {
    return  fetch(url).then((val)=>{
        return val.json(); // читаем ответ в формате JSON
    })
}

