import { useRef, useEffect, useState } from "react";
import { Wrapper, NewInboxForm } from "./styles";
import { IoSendOutline, IoFileTrayOutline } from "react-icons/io5";
import useApi from "../../hooks/useApi";

function NewInbox({ onAdd }) {
  const input_ref = useRef(null);
  const [item, setItem] = useState("");

  useEffect(() => {
    input_ref.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item) {
      onAdd(item);
      setItem("");
    }
  };

  return (
    <Wrapper>
      <NewInboxForm onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <IoFileTrayOutline className="icon" />
          <input
            type="text"
            ref={input_ref}
            placeholder="What's on your mind.."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add_inbox_btn">
          Add
          <IoSendOutline className="icon" />
        </button>
      </NewInboxForm>
    </Wrapper>
  );
}

export default NewInbox;
