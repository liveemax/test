const url = 'https://opentdb.com/api_token.php?command=request';
const apiToken = async () =>
  fetch(url).then(
    (val) => val.json() // читаем ответ в формате JSON
  );
export default apiToken;
