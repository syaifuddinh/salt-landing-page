import Burger from "../../assets/images/icons/burger.svg"
import Logo from "../logo/Index"

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-between align-items-center">
        <Logo />

        <div className="cursor-pointer">
            <img src={Burger} />
        </div>
    </div>
  );
}

export default Navbar;
