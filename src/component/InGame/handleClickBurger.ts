import { RefObject } from 'react';
import classes from '../../assets/css/InGame.module.scss';

const handleClickBurger = (
  e: any,
  game: RefObject<HTMLInputElement>,
  cash: RefObject<HTMLInputElement>
) => {
  if (game && cash && cash.current && game.current) {
    const current = e.currentTarget.classList[0];
    const currentClass = current.split('_')[1];
    e.currentTarget.classList.remove(current);
    if (currentClass === 'close') {
      // eslint-disable-next-line no-param-reassign
      cash.current.className = '';
      cash.current.classList.add(classes.hidden);
      e.currentTarget.classList.add(classes.burger);
      game.current.classList.add(classes.visible);
      game.current.classList.add(classes.game);
    }
    if (currentClass === 'burger') {
      // eslint-disable-next-line no-param-reassign
      game.current.className = '';
      e.currentTarget.classList.add(classes.close);
      game.current.classList.add(classes.hidden);
      cash.current.classList.add(classes.visible);
      cash.current.classList.add(classes.cash_wrapper);
    }
  }
};
export default handleClickBurger;
