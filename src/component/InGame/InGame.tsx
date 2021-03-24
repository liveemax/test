import React, { useContext, useRef } from 'react';

import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router';
import Answer from './Answer';
import classes from '../../assets/css/InGame.module.scss';
import Cash from './Cash';
import handleClickBurger from './handleClickBurger';
import { StoreContext } from '../../index';
import updateSize from './updateSize';

const InGame = observer((): any => {
  const game = useRef<HTMLInputElement>(null);
  const cash = useRef<HTMLInputElement>(null);
  const store = useContext(StoreContext);
  const A = 65;
  window.addEventListener('resize', () => updateSize(game, cash, store)); // обновляем стили (бургера) при resize
  return (
    <div className={classes.root}>
      <div ref={game} className={`${classes.game} ${classes.visible}`}>
        <p>{store.question}</p>
        <div className={classes.answer}>
          <div className={classes.wrapper}>
            {store.answer.map((el, ind) => (
              <Answer
                index={ind}
                answer={store.answer[ind]}
                letter={String.fromCharCode(A + ind)}
                key={el}
              />
            ))}
          </div>
        </div>
      </div>
      <div ref={cash} className={`${classes.cash_wrapper} ${classes.hidden}`}>
        {store.money
          .map((el, index) => {
            if (index < store.cash) {
              return (
                <Cash position="past" money={store.money[index]} key={el} />
              );
            }
            if (index > store.cash) {
              return (
                <Cash position="future" money={store.money[index]} key={el} />
              );
            }
            return (
              <Cash position="active" money={store.money[index]} key={el} />
            );
          })
          .reverse()}
      </div>
      <button
        id="burger"
        type="button"
        onClick={(e) => {
          handleClickBurger(e, game, cash);
        }}
        className={classes.burger}>
        {' '}
      </button>
      {store.gameOver ? <Redirect to="/gameOver" /> : ''}
      {store.token === '' ? <Redirect to="/" /> : ''}
    </div>
  );
});
export default InGame;
