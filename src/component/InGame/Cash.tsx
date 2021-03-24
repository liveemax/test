/** @format */

import React from 'react';
import classes from '../../assets/css/cash.module.scss';
import inactive from '../../assets/img/cash/inactive.png';
import active from '../../assets/img/cash/active.png';

type cash = {
  money: string;
  position: string;
};

const Cash: React.FC<cash> = (prop): any => {
  const { position, money } = prop;
  return (
    <div className={classes.root}>
      <div className={classes.inactive}>
        <img src={position === 'active' ? active : inactive} alt="" />
        <span className={position === 'past' ? classes.prev : ''}>{money}</span>
      </div>
    </div>
  );
};
export default Cash;
