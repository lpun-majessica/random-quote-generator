import QuoteBlock from "./QuoteBlock";
import { useCallback, useEffect, useState } from "react";
import "../styles/App.scss";

function App() {
	const [quotesData, setQuotes] = useState({});
	const [color, setColor] = useState("red");
	const [colorIndex, setColorIndex] = useState(1);

	const changeColor = useCallback(() => {
		const backgroundColors = [
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
			"purple",
		];

		setColorIndex((c) => (c + 1) % backgroundColors.length);
		setColor(() => backgroundColors[colorIndex]);
	}, [colorIndex]);

	useEffect(() => {
		fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		)
			.then((response) => response.json())
			.then((data) => {
				setQuotes(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (quotesData.quotes) {
		return (
			<div className={`app-container ${color}`}>
				<QuoteBlock
					quotes={quotesData.quotes}
					changeColor={changeColor}
					buttonColor={color}
				/>
			</div>
		);
	} else {
		return <div className={`loading ${color}`}>Loading quotes for you :)</div>;
	}
}

export default App;
