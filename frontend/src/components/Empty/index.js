import { Wrapper } from "./styles";
import illustration from "../../assets/img/empty.svg";

function Empty() {
	return (
		<Wrapper>
			<img src={illustration} alt="empty illustration" />
			<p>All clear for now.</p>
		</Wrapper>
	);
}

export default Empty;
