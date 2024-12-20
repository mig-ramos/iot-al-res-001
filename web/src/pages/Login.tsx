import { Link } from "react-router"
import Content from "../components/content"

export default function Login() {


    return (
        <Content>
            <section className="flex flex-col mt-4 md:w-[400px] m-auto items-center justify-center">
                <form action="" className="flex flex-col w-11/12 gap-4">
                    <input
                        className="w-full p-2 rounded-xl border border-zinc-300"
                        type="email"
                        required
                        name="email"
                        placeholder="Digite seu e-mail..."
                    />
                    <input
                        className="w-full p-2 rounded-xl border border-zinc-300"
                        type="password"
                        required
                        name="password"
                        placeholder="*************"
                    />
                    <button type="submit" className="bg-blue-300 h-10 w-full text-lg cursor-pointer rounded-xl hover:scale-105 delay-500">
                        Acessar
                    </button>
                </form>
                <Link to={"/signup"} className="p-2 cursor-pointer">
                    Não possui uma conta? cadastre-se
                </Link>
            </section>
        </Content>
    )
}