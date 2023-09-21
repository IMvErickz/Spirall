import { Input } from "@/components/Input/input";

export function RegisterForm() {
    return (
        <form className="w-full flex flex-col items-center justify-center space-y-4">
            <Input placeholder="Nome de usuário" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirme a senha" type="password" />
            <button className="bg-green-600 h-12 w-40 text-xl font-semibold rounded-xl hover:bg-green-400 transition-colors" type="submit">Cadastrar</button>
        </form>
    )
}