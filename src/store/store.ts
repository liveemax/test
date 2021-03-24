import {
  runInAction,
  makeObservable,
  observable,
  configure,
  action,
} from 'mobx';
import apiToken from '../api/apiToken';
import apiQuestions from '../api/apiQuestions';
import randomPosition from './function/randomPosition';

configure({ enforceActions: 'always' });
export default class Store {
  money: Array<string> = [
    '$500',
    '$1,000',
    '$2,000',
    '$4,000',
    '$8,000',
    '$16,000',
    '$32,000',
    '$64,000',
    '$125,000',
    '$250,000',
    '$500,000',
    '$1,000,000',
  ];
  question: string = '';
  answer: Array<any> = [];
  correct: string = '';
  cash: number = 0;
  difficulty: Array<string> = [
    'easy',
    'easy',
    'easy',
    'easy',
    'medium',
    'medium',
    'medium',
    'medium',
    'hard',
    'hard',
    'hard',
    'hard',
  ];
  token: string = '';
  gameOver: boolean = false;
  width: number = 0;

  constructor() {
    makeObservable(this, {
      money: observable,
      question: observable,
      answer: observable,
      correct: observable,
      cash: observable,
      difficulty: observable,
      token: observable,
      gameOver: observable,
      width: observable,
      setWidth: action,
      setNewData: action,
      toGameOver: action,
    });
  }

  setWidth(width: number) {
    this.width = width;
  }

  toGameOver(gameOver: boolean) {
    this.gameOver = gameOver;
  }

  setNewData(data: any, ans: string[], cash: number) {
    this.correct = data.results[0].correct_answer;
    this.question = data.results[0].question;
    this.answer = ans;
    this.cash = cash;
  }

  async getData(cash: number) {
    try {
      const data = await apiQuestions(this.difficulty[cash], this.token);
      data.results[0].incorrect_answers.push(data.results[0].correct_answer);
      const ans = randomPosition(data.results[0].incorrect_answers); // array have 4 questions
      this.setNewData(data, ans, cash);
    } catch (e) {
      alert(e);
    }
  }

  async getToken() {
    if (this.width === 0) this.width = window.innerWidth;
    try {
      const token = await apiToken();
      if (token.response_code === 0) {
        runInAction(() => {
          this.token = token.token;
        });
      } else {
        throw new Error('whf...getToken Error');
      }
      this.getData(0);
    } catch (e) {
      alert(e);
    }
  }
}
