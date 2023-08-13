import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <nav className="nav-container">
          <button>
            <AiOutlineSearch />
          </button>
          <h1>unruly</h1>
          <div>
            <button>
              <Link to="/login" className="nav-link">
                <FiUser />
              </Link>
            </button>
            <button>
              <Link to="/cart" className="nav-link">
                <GiShoppingBag />
                <span>0</span>
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
