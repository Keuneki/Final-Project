import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavMeniu.css';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/classes">Classes</Link>
          <ul>
            <li>
              <Link to="/classes/basic">Basic Classes</Link>
            </li>
            <li>
              <Link to="/classes/advanced">Advanced Classes</Link>
            </li>
            <li>
              <Link to="/classes/master">Master Classes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
          <ul>
            <li>
              <Link to="/elements/core">Core Elements</Link>
            </li>
            <li>
              <Link to="/elements/prime">Prime Elements</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/magic">Magic</Link>
          <ul>
            <li>
              <Link to="/magic/pure">Pure Magic</Link>
            </li>
            <li>
              <Link to="/magic/mixed">Mixed Magic</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
