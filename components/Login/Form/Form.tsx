'use client'

import { Input } from "@/components/Input/input"
import { useState } from "react"

export function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="w-full flex flex-col items-center justify-center gap-y-4">
            <Input placeholder="email" type="email" onChange={event => setEmail(event.target.value)} />
            <Input placeholder="senha" type="password" onChange={event => setPassword(event.target.value)} />
            <button className="bg-green-600 h-12 w-40 text-xl font-semibold rounded-xl hover:bg-green-400 transition-colors" type="submit">Entrar</button>
        </form>
    )
}