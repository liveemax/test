import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { createContext } from 'react';
import Store from './store/store';
import GameStart from './component/GameStart/GameStart';
import InGame from './component/InGame/InGame';
import GameOver from './component/GameOver/GameOver';
import Preload from './component/Preload/Preload';

export const StoreContext = createContext<Store>(new Store());

function App() {
  return (
    <BrowserRouter basename="/test">
      <StoreContext.Provider value={new Store()}>
        <Switch>
          <Route exact path="/">
            <GameStart />
          </Route>
          <Route path="/game">
            <InGame />
          </Route>
          <Route path="/gameOver">
            <GameOver />
          </Route>
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
        <Preload />
      </StoreContext.Provider>
    </BrowserRouter>
  );
}

export default ReactDOM.render(<App />, document.getElementById('root'));
