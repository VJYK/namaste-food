import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState,useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector(store=>store.cart.items)
  //console.log(cartItems)
  //console.log(loggedInUser)
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} width={50} height={50} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {status ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocessary">Grocerry</Link>
          </li>
          <li><Link to="/cart"> Cart - ({cartItems.length})Items</Link></li>
          <li>User : {loggedInUser}</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
