import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <div className="text-lg font-bold align-middle">Olaf Skalski</div>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className=" flex justify-end">
            <div className="btn btn-ghost btn-sm rounded-btn">Home</div>
            <div className="btn btn-ghost btn-sm rounded-btn">About</div>
            <div className="btn btn-ghost btn-sm rounded-btn">Experience</div>
            <div className="btn btn-ghost btn-sm rounded-btn">Portfolio</div>
            <div className="btn btn-ghost btn-sm rounded-btn">Contact</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
