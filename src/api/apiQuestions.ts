const url = 'https://opentdb.com/api.php?amount=1&type=multiple';
const apiQuestions = async (difficulty: string, token: string) => {
  const endUrl = `${url}&difficulty=${difficulty}&token=${token}&encode=base64`;
  const response = await fetch(endUrl);
  const data = await response.json(); // читаем ответ в формате JSON

  /// //////base64 to string

  data.results[0].correct_answer = atob(data.results[0].correct_answer);
  data.results[0].question = atob(data.results[0].question);
  data.results[0].incorrect_answers = data.results[0].incorrect_answers.map(
    (el: any) => atob(el)
  );
  /// ////

  if (data.response_code === 0) return data;

  throw Error('apiQuestion...getAnswer Error');
};
export default apiQuestions;
