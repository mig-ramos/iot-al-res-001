import { Link, NavLink } from "react-router";
import { LogoTipo } from "./logo-tipo";

export function Navbar() {
  return (
    <div className="flex flex-col m-auto w-full md:flex-row items-center gap-10">
      <Link to={"/"} className="">
        <LogoTipo />
      </Link>
      <nav className="flex flex-col leading-6 md:flex-row items-center gap-5 mx-auto text-2xl">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "text-zinc-600")}>Home</NavLink>
        <NavLink to="/checklist" className={({ isActive }) => (isActive ? "text-blue-600" : "text-zinc-600")}>Check</NavLink>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? "text-blue-600" : "text-zinc-600")}>Admin</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-600" : "text-zinc-600")}>About</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "text-blue-600" : "text-zinc-600")}>Login</NavLink>
      </nav>
    </div>
  );
}