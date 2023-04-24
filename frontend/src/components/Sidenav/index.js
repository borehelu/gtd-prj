import { NavLink, useNavigate } from "react-router-dom";
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

import useLogout from "../../hooks/useLogout";
import { Aside } from "./styles";

function SideNav({ show }) {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Aside className={`sidenav ${show}`} id="sidenav">
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
      <button className="logout" onClick={signOut}>
        <IoLogOutOutline className="icon" />
      </button>
    </Aside>
  );
}

export default SideNav;
