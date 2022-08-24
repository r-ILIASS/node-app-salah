/**
 *  TODO: extract reusable <ul> components
 *        highlight selected Link
 */

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-full max-w-[16.25rem] px-4">
      {/* list */}
      <ul className="flex flex-col space-y-1 py-2">
        <span className="text-sm font-medium p-2">Dashboard</span>
        {/* item */}
        <Link to="/" className="inactive">
          <div className="flex items-center space-x-2 py-3 pl-6 pr-4">
            <div>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /> </svg>
            </div>
            <div className="text-sm">Main</div>
          </div>
        </Link>

        {/* item */}
        <Link to="/performance" className="inactive">
          <div className="flex items-center space-x-2 py-3 pl-6 pr-4">
            <div>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> </svg>
            </div>
            <div className="text-sm">Performance</div>
          </div>
        </Link>
      </ul>

      <hr />

      {/* list */}
      <ul className="flex flex-col space-y-1 py-2">
        <span className="text-sm font-medium p-2">Admin</span>
        {/* item */}
        <Link to="/users" className="inactive">
          <div className="flex items-center space-x-2 py-3 pl-6 pr-4">
            <div>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
            </div>
            <div className="text-sm">Users</div>
          </div>
        </Link>

        {/* item */}
        <Link to="/roles" className="inactive">
          <div className="flex items-center space-x-2 py-3 pl-6 pr-4">
            <div>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> </svg>
            </div>
            <div className="text-sm">Roles</div>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
