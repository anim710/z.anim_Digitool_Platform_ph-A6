import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="font-bold text-xl text-purple-600">DigiTools</h1>
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
        <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
        <a className="text-gray-700 font-medium cursor-pointer">Login</a>
        <a className="btn bg-purple-600 rounded-full text-white px-5">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;