import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import InboxList from "./InboxList";
import NewInbox from "./NewInbox";
import EditInbox from "./EditInbox";
import useApi from "../../hooks/useApi";

function Home() {
  const { state, createItem, updateItem, removeItem } = useApi("inbox/");
  const [active, setActive] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = (item) => {
    const created_at = new Date();
    const toastId = toast.loading("Adding item...");
    try {
      createItem({ item, created_at });
      toast.success("Item added", { id: toastId });
    } catch (e) {
      toast.error(e.message, { id: toastId });
    }
  };

  const handleUpdate = async (id, updatedItem) => {
    const toastId = toast.loading("Updating...");
    try {
      await updateItem(id, updatedItem);
      toast.success("Item updated", { id: toastId });
    } catch (error) {
      toast.error("Error updating item", { id: toastId });
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = (id) => {
    const toastId = toast.loading("Deleting...");
    try {
      removeItem(id);
      toast.success("Item deleted!", { id: toastId });
    } catch (e) {
      toast.error(e.message, { id: toastId });
    }
  };

  return (
    <Main>
      <Toaster />
      <NewInbox onAdd={handleAdd} />
      <EditInbox
        onUpdate={handleUpdate}
        active={active}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <InboxList
        state={state}
        onDelete={handleDelete}
        setActive={setActive}
        setIsEditing={setIsEditing}
      />
    </Main>
  );
}

export default Home;
