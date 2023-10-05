import "./Navbar.scss";
import React from 'react';
import { Link, useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/rateradio';
  return (
    <nav className="navbar">
      <ul>
      {isHomePage ? null : (
          <li>
            <Link to="/rateradio">Accueil</Link>
          </li>
        )}
        <li>
          <Link to="a-propos">A propos</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   const location = useLocation();

//   // Check if the current URL is the homepage
//   const isHomePage = location.pathname === '/';

//   return (
//     <nav className="navbar">
//       <ul>
//         {isHomePage ? null : (
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//         )}
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };


