import { useState } from "react";
import useApi from "../../hooks/useApi";
import { Main } from "./styles";
import EventList from "./EventList";
import WeekBar from "./WeekBar";
import toast, { Toaster } from "react-hot-toast";
import EditCalendar from "./EditCalendar";

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [active, setActive] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(null);
  const { state, updateItem, removeItem } = useApi("calendar/");

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
    <>
      <Toaster />
      <Main>
        <WeekBar
          active={active}
          setActive={setActive}
          today={today}
          state={state}
        />
        <EditCalendar
          onUpdate={handleUpdate}
          selected={selected}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <EventList
          state={state}
          active={active}
          onDelete={handleDelete}
          setSelected={setSelected}
          setIsEditing={setIsEditing}
        />
      </Main>
    </>
  );
}

export default Calendar;
