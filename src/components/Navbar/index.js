import "./style.scss";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <div className="navbar">
      <Nav className="navbar-nav">
        <NavLink active href="#" className="text-logo">
          Meridiem App
        </NavLink>
        <div className="navbar-bottom">
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Statistic</NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
