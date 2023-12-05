'use client'

import { SendHorizontal } from "lucide-react"
import { FormEvent, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onSubmit: (event: FormEvent<Element>) => void
}

export function InputArea({ onSubmit, ...rest }: Props) {
    return (
        <form onSubmit={onSubmit} className="w-full h-20 flex flex-row items-center justify-center bg-zinc-950">
            <div className="w-full h-full flex items-center justify-center px-8">
                <input {...rest} type="text" className="w-full h-10 px-4 outline-none drop-shadow-xl text-white bg-zinc-700 rounded-lg" />
            </div>
            <div className="w-max flex items-center justify-center pr-4">
                <button type="submit" className="bg-violet-950 w-20 h-10 flex items-center drop-shadow-xl justify-center rounded-lg hover:bg-violet-800 transition-colors">
                    <SendHorizontal color="white" size={32} />
                </button>
            </div>
        </form>
    )
}