import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {createContext} from "react";
import {store} from "./store/store";
import {GameStart} from "./component/GameStart/GameStart";
import {InGame} from "./component/InGame/InGame";
import {GameOver} from "./component/GameOver/GameOver";

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
					<Route path='*' render={() => {
						return(<div>404 NOT FOUND</div>)}}/>
				</Switch>
			</StoreContext.Provider>
		</BrowserRouter>
	);
}
export default ReactDOM.render(<App />,document.getElementById('root')
);
