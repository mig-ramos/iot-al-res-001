import { Navbar } from "./Navbar";

export function Header(){
    return(
        <header className="flex w-auto justify-center items-center p-2 border-b-2 border-zinc-300">
            <Navbar />
        </header>
    )
}