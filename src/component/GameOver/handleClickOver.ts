import Store from '../../store/store';

const handleClickOver = (store: Store) => {
  store.getData(0).then(() => {
    store.toGameOver(false);
  });
};

export default handleClickOver;
