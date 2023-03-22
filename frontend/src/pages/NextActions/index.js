import {
  IoGridOutline,
  IoStopwatchOutline,
  IoCheckmarkDoneOutline,
  IoSearchOutline,
  IoHourglassOutline,
  IoChevronDownOutline,
  IoOptionsOutline,
  IoListOutline,
  IoEllipsisVertical,
} from "react-icons/io5";

import { Main, Section, SearchBarForm } from "./styles";
import SearchBar from "./SearchBar";
import NextItem from "../../components/NextItem";

const next = [
  {
    id: 1,
    item_name: "Call Beth to plan the birthday party",
    description: "We need Beths feedback on whether or not to buy a cake.",
    status: "Pending",
    priority: "Medium",
    due_date: "In 3 weeks",
    context: "@Home",
  },
  {
    id: 2,
    item_name: "Call Beth to plan the birthday party",
    description: "We need Beths feedback on whether or not to buy a cake.",
    status: "Pending",
    priority: "Medium",
    due_date: "In 3 weeks",
    context: "@Home",
  },
  {
    id: 3,
    item_name: "Get the financials done",
    description: "We need Beths feedback on whether or not to buy a cake.",
    status: "Pending",
    priority: "Medium",
    due_date: "In 3 weeks",
    context: "@Home",
  },
  {
    id: 4,
    item_name: "Call Beth to plan the birthday party",
    description: "We need Beths feedback on whether or not to buy a cake.",
    status: "Pending",
    priority: "Medium",
    due_date: "In 3 weeks",
    context: "@Home",
  },
];

function NextActions() {
  return (
    <Main>
      <SearchBar />
      <Section>
        <h2 className="section_heading">Next Actions</h2>
        {next.map((item) => (
          <NextItem key={item.id} item={item} />
        ))}
      </Section>
    </Main>
  );
}

export default NextActions;
