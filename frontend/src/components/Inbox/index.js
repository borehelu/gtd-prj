import { InboxWrapper } from "./styles";
import Options from "./Options";
import { formatDate } from "../../utils/date";

function Inbox({ data }) {
  return (
    <InboxWrapper>
      <div>
        <p>{data.item}</p>
        <p>
          <small>{formatDate(data.created_at)}</small>
        </p>
      </div>
      <Options item={data} />
    </InboxWrapper>
  );
}

export default Inbox;
