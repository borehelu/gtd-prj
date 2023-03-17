import { Wrapper } from "./styles";
import illustration from "../../assets/img/empty.svg";

function Empty() {
	return (
		<Wrapper>
			<img src={illustration} alt="empty illustration" />
			<p>No items posted.</p>
		</Wrapper>
	);
}

export default Empty;
