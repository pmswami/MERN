// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// function Navbar(props) {
//   // console.log(props);
//   return (
//     <nav className="nav-wrapper red darken-3">
//       <div className="container">
//         <a className="brand-logo">Poke'Times</a>
//         <ul className="right">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          Poke' Times
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
