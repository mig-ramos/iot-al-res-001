// import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "react-router";
export function Navbar() {
  return (
    <div className="flex items-center gap-5 py-2">
    {/*  <img src={nlwUniteIcon} alt="NLW Unite" /> */}
      <nav className="flex items-center gap-5">
        <NavLink to="/" className={({isActive}) => (isActive ? "text-rose-600" : "text-zinc-600")}>Home</NavLink>
        <NavLink to="/measures" className={({isActive}) => (isActive ? "text-rose-600" : "text-zinc-600")}>Medidas</NavLink>
        <NavLink to="/admin" className={({isActive}) => (isActive ? "text-rose-600" : "text-zinc-600")}>Administração</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? "text-rose-600" : "text-zinc-600")}>Sobre</NavLink>
      </nav>
    </div>
  );
}