import { RegisterForm } from "@/components/Register/Form/Form";

export default function Register() {
    return (
        <main className="w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center">
            <header className="w-full flex items-center justify-center">
                <h1 className="text-white font-bold text-6xl">Cadastro</h1>
            </header>
            <section>
                <RegisterForm />
            </section>
        </main>
    )
}