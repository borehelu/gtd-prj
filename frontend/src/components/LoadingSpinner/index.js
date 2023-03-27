import React from "react";
import { SpinnerContainer, Spinner, Square } from "./styles";

function LoadingSpinner() {
	return (
		<SpinnerContainer>
			<Spinner>
				<Square />
				<Square />
				<Square />
				<Square />
			</Spinner>
		</SpinnerContainer>
	);
}

export default LoadingSpinner;
