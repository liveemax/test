import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import triangle from '../../assets/img/triangle.png';
import hand from '../../assets/img/hand.svg';
import classes from '../../assets/css/gameStart.module.scss';
import { StoreContext } from '../..';

const GameStart: React.FC<any> = observer((): any => {
  const props = useContext(StoreContext);
  useEffect(() => {}, []);
  if (props.token === '') props.getToken(); // first input
  return (
    <div className={classes.root}>
      <div className={classes.hand}>
        <img src={hand} alt="hand" />
      </div>
      <div className={classes.ask}>
        <p>Who wants to be a millionaire?</p>
        <div>
          <Link to="/game">
            <button type="button" className={classes.start}>
              Start
            </button>
          </Link>
        </div>
      </div>
      <button type="button" className={classes.lang}>
        eng
      </button>
      <img className={classes.triangle} src={triangle} alt="" />
    </div>
  );
});
export default GameStart;
