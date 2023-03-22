import { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Wrapper, NewInboxForm } from "./styles";
import { IoSendOutline, IoFileTrayOutline } from "react-icons/io5";
import useInbox from "../../hooks/useInbox";

function NewInbox() {
  const input_ref = useRef(null);
  const [item, setItem] = useState("");
  const { createItem } = useInbox();

  useEffect(() => {
    input_ref.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding inbox");

    if (item) {
      const created_at = new Date();
      try {
        createItem({ item, created_at });
        toast.success("Item added", { id: toastId });
      } catch (e) {
        toast.error(e.message, { id: toastId });
      }

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
