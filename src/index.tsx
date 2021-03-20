import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {createContext} from "react";
import {GameStart} from "./component/GameStart/GameStart";
import {InGame} from "./component/InGame/InGame";
import {GameOver} from "./component/GameOver/GameOver";
import {store} from "./store/store";

export const StoreContext = createContext<store>(new store())
function App() {
	return (
		<BrowserRouter>
			<StoreContext.Provider value={new store()}>
			<Switch>
				<Route exact path="/">
					<GameStart/>
				</Route>
				<Route path="/game">
					<InGame/>
				</Route>
				<Route path="/gameOver">
					<GameOver/>
				</Route>
			</Switch>
			</StoreContext.Provider>
		</BrowserRouter>
	);
}
export default ReactDOM.render(<App />,document.getElementById('root')
);

