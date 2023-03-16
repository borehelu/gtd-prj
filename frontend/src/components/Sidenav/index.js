import { NavLink } from "react-router-dom";
import {
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoFileTrayOutline,
  IoListOutline,
  IoBriefcaseOutline,
  IoBulbOutline,
  IoPeopleCircleOutline,
  IoLogOutOutline,
  IoLogoWebComponent,
} from "react-icons/io5";

function SideNav({ show }) {
  return (
    <aside className={`sidenav ${show}`} id="sidenav">
      <nav>
        <div className="nav_logo">
          <IoLogoWebComponent className="icon" />
        </div>
        <ul>
          <li className="nav_link">
            <NavLink to="/">
              <IoFileTrayOutline className="icon" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/next-actions">
              <IoListOutline className="icon" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/projects">
              <IoBriefcaseOutline className="icon" />
            </NavLink>
          </li>

          <li className="nav_link">
            <NavLink to="/calendar">
              <IoCalendarOutline className="icon" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/waiting-for">
              <IoPeopleCircleOutline className="icon" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/someday-maybe">
              <IoBulbOutline className="icon" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/references">
              <IoDocumentTextOutline className="icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <IoLogOutOutline className="icon" />
      </div>
    </aside>
  );
}

export default SideNav;
