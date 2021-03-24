import classes from '../../assets/css/InGame.module.scss';

function updateSize(game: any, cash: any, store: any) {
  if (game && cash && cash.current && game.current) {
    // eslint-disable-next-line no-param-reassign
    game.current.className = '';
    game.current.classList.add(classes.visible);
    game.current.classList.add(classes.game);
    // eslint-disable-next-line no-param-reassign
    cash.current.className = '';
    cash.current.classList.add(classes.cash_wrapper);
    store.setWidth(window.innerWidth);
    if (window.innerWidth < 720) {
      cash.current.classList.add(classes.hidden);
    }
  }
}
export default updateSize;
