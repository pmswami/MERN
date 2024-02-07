import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../context/useLogout";

// export default function Navbar() {
//   return (
//     <div>
//       <header>
//         <Link to="/">
//           <h1>Workout Buddy</h1>
//         </Link>
//       </header>
//     </div>
//   );
// }

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
