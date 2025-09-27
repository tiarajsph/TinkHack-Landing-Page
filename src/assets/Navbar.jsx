import logo from "../assets/logo.png";
const Navbar = () => (
    <nav>
        <img src={logo} alt="TinkHack Logo" style={{ height: "50px" }} />
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#timeline">Timeline</a></li>
      <li><a href="#registration">Register</a></li>
      <li><a href="#sponsors">Sponsors</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);
export default Navbar;
