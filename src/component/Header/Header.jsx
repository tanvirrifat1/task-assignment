import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#099d84] text-white">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="btn btn-outline text-white">
              <NavLink to="/task">Add Task</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
