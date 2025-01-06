import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] py-8 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto md:flex md:justify-between md:items-center">
          <span>
            <Link to="" className="uppercase text-3xl font-bold text-white">
              Start Framework
            </Link>
          </span>

          <ul className=" flex justify-between items-center gap-5">
            <li>
              <NavLink
                to=""
                className="uppercase text-lg font-medium text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="uppercase text-lg font-medium text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className="uppercase text-lg font-medium text-white">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="uppercase text-lg font-medium text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
