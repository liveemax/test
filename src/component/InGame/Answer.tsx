import React, { useContext } from 'react';
import classes from '../../assets/css/answer.module.scss';
import handleClickAnswer from './handleClickAnswer';
import { StoreContext } from '../../index';

type root = {
  answer: string;
  letter: string;
  index: number;
};
const Answer: React.FC<root> = (prop) => {
  const { answer, letter, index } = prop;
  const store = useContext(StoreContext);
  return (
    <div className={classes.root}>
      <div
        tabIndex={index + 1}
        role="button"
        className={classes.inactive}
        onClick={(e: any) => handleClickAnswer(e, store)}
        onKeyDown={(e: any) => {
          if (e.code !== 'Tab') return handleClickAnswer(e, store);
          return null;
        }}>
        <div className={classes.text}>
          <span>{letter}</span>
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
};
export default Answer;
