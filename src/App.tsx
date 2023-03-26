import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [beatsPerMinute, setBeatsPerMinute] = useState(60);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("tick");
		}, 60 / beatsPerMinute * 1000);
		return () => clearInterval(interval);
	}, [beatsPerMinute]);

	return (
		<div className="App">
			<h1>Metronome</h1>
			<div className="card">
				<h2>Beats Per Minute: {beatsPerMinute}</h2>
				<button
					onClick={() =>
						setBeatsPerMinute((beatsPerMinute) => beatsPerMinute + 1)
					}
				>
					Up
				</button>
				<button
					onClick={() =>
						setBeatsPerMinute((beatsPerMinute) => beatsPerMinute - 1)
					}
				>
					Down
				</button>
			</div>
		</div>
	);
}

export default App;
