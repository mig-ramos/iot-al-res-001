export function Footer(){
    return(
        <footer className="flex w-auto justify-center items-center mt-4 p-2 border-t-2 border-zinc-300">
            <p>&copy;{new Date().getFullYear()} - Todos os direitos reservados.</p>
        </footer>
    )
}