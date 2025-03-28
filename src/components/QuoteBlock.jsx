import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import "../styles/QuoteBlock.scss";

function QuoteBlock({ quotes, changeColor, buttonColor }) {
	const [quoteData, setQuote] = useState({});

	const randomiseQuote = useCallback(() => {
		const newQuoteIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[newQuoteIndex]);
	}, [quotes]);

	useEffect(() => randomiseQuote(), [randomiseQuote]);

	return (
		<>
			<div className="quote-container">
				<p className="quote">{quoteData.quote}</p>
				<p className="author">{quoteData.author}</p>

				<Button
					className={`new-quote-btn ${buttonColor}`}
					title="Generate New Quote"
					onClick={() => {
						randomiseQuote();
						changeColor();
					}}
				>
					<FontAwesomeIcon icon={faArrowsRotate} className="btn-icon" />
				</Button>
			</div>
		</>
	);
}

QuoteBlock.propTypes = {
	quotes: PropTypes.array.isRequired,
	changeColor: PropTypes.func.isRequired,
	buttonColor: PropTypes.string.isRequired,
};
export default QuoteBlock;
