import { InboxWrapper, Item, Time } from "./styles";
import Options from "../../components/Options";
import { formatDate } from "../../utils/date";

function Inbox({ data, onDelete, setActive, setIsEditing }) {
  return (
    <InboxWrapper>
      <div>
        <Item>{data.item}</Item>
        <Time>{formatDate(data.created_at)}</Time>
      </div>
      <Options
        item={data}
        setActive={setActive}
        onDelete={onDelete}
        setIsEditing={setIsEditing}
      />
    </InboxWrapper>
  );
}

export default Inbox;
