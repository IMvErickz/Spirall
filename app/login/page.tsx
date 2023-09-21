import { LoginForm } from "@/components/Login/Form/Form";

export default function Login() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center space-y-16 bg-zinc-900">
            <header className="w-full flex items-center justify-center">
                <h1 className="text-white font-bold text-6xl">Login</h1>
            </header>
            <section>
                <LoginForm />
            </section>
        </main>
    )
}