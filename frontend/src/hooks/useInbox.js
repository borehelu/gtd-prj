import { useContext } from "react";
import InboxContext from "../context/InboxProvider";

const useInbox = () => {
    return useContext(InboxContext);
};

export default useInbox;
