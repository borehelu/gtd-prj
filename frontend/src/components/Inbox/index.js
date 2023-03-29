import { InboxWrapper } from "./styles";
import Options from "../Options";
import { formatDate } from "../../utils/date";
import useInbox from "../../hooks/useInbox";

function Inbox({ data }) {
  const { removeItem, setSelected, setShowEditing } = useInbox();
  return (
    <InboxWrapper>
      <div>
        <p>{data.item}</p>
        <p>
          <small>{formatDate(data.created_at)}</small>
        </p>
      </div>
      <Options
        item={data}
        removeItem={removeItem}
        setSelected={setSelected}
        setShowEditing={setShowEditing}
      />
    </InboxWrapper>
  );
}

export default Inbox;
