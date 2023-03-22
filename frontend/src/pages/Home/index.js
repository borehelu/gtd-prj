import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoBuildOutline } from "react-icons/io5";

import { Main } from "./styles";
import InboxList from "./InboxList";
import NewInbox from "./NewInbox";
import EditInbox from "./EditInbox";
import useApi from "../../hooks/useApi";
import { InboxProvider } from "../../context/InboxProvider";

function Home() {
  return (
    <Main>
      <Toaster />
      <InboxProvider>
        <NewInbox />
        <EditInbox />
        <InboxList />
      </InboxProvider>
    </Main>
  );
}

export default Home;
