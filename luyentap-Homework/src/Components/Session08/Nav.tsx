import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className="nav-link active m-1 "  to={'/list'}>List</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active m-1" to={'/form'}>Form</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active  m-1" to={'/detail'}>Detail</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active  m-1" to={'/input'}>Add User</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;
