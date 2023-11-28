import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-gray-300 bg-slate-700 rounded-lg lg:hover:text-slate-400">
              <NavLink to="/task">Add Task</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
