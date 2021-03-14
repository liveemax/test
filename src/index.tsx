import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {GameStart} from "./component/GameStart/GameStart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InGame} from "./component/InGame/InGame";
import {GameOver} from "./component/GameOver/GameOver";


function App() {
	return (
		<BrowserRouter>
			{/*<GameStart/>*/}
			{/*<InGame/>*/}
			<GameOver/>
		</BrowserRouter>
	);
}
export default ReactDOM.render(<App />,document.getElementById('root')
);

