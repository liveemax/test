import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import hand from '../../assets/img/hand.svg';
import classes from '../../assets/css/gameOver.module.scss';
import { StoreContext } from '../../index';
import handleClickOver from './handleClickOver';

const GameOver = observer(() => {
  const store = useContext(StoreContext);
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <img src={hand} alt="hand" />
      </div>
      <div className={classes.item}>
        <div className={classes.total}>Total score:</div>
        <div className={classes.earned}>{store.money[store.cash]} earned</div>
        <div>
          <button
            type="button"
            className={classes.end}
            onClick={() => handleClickOver(store)}>
            <Link to="/game">Try again</Link>
          </button>
        </div>
      </div>
      <button type="button" className={classes.lang}>
        eng
      </button>
      {store.gameOver ? '' : <Redirect to="/game" />}
    </div>
  );
});
export default GameOver;
