import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {GameStart} from "./component/GameStart/GameStart";
import {InGame} from "./component/InGame/InGame";
import {GameOver} from "./component/GameOver/GameOver";



function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}
export default ReactDOM.render(<App />,document.getElementById('root')
);

