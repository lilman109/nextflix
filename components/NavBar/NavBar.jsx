import React from "react";

const NavBar = (props) => {
  const { userName } = props;
  return (
    <div>
      <p>{userName}</p>
      <ul>
        <li>Home</li>
        <li>My List</li>
      </ul>
      <nav>
        <div>
          <button>
            <p>{userName}</p>
          </button>
        </div>
        <div>
          <a>Sign Out</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
