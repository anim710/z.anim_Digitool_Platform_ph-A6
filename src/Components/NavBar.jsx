import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const NavBar = ({ carts }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="font-bold text-3xl text-purple-600">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="relative cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} className="text-gray-700 text-xl" />
          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {carts.length}
            </span>
          )}
        </div>
        
        <a className="text-gray-700 font-medium cursor-pointer">Login</a>
        <a className="btn bg-purple-600 rounded-full text-white px-5">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;