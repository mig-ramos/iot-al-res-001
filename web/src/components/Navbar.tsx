import { Link, NavLink } from "react-router";
import { LogoTipo } from "./logo-tipo";

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <Link to={"/"} className="flex">
        <LogoTipo />
      </Link>
      <nav className="flex flex-col md:flex-row items-center gap-5 mx-auto text-2xl">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-rose-600" : "text-zinc-600")}>Home</NavLink>
        <NavLink to="/measures" className={({ isActive }) => (isActive ? "text-rose-600" : "text-zinc-600")}>Medidas</NavLink>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? "text-rose-600" : "text-zinc-600")}>Administração</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-rose-600" : "text-zinc-600")}>Sobre</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "text-rose-600" : "text-zinc-600")}>Login</NavLink>
      </nav>
    </div>
  );
}