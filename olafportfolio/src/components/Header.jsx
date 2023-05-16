import { Link, animateScroll as scroll } from "react-scroll";
function Header() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <div className="text-lg font-bold align-middle">Olaf Skalski</div>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className=" flex justify-end">
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Portfolio
            </Link>

            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
