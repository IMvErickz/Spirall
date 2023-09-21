'use client'

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: string
}

export function Input({ placeholder, type, ...rest }: InputProps) {
    return (
        <input {...rest} placeholder={placeholder} type={type} className="p-2 h-12 w-60 rounded-lg text-white bg-zinc-700 outline-none" />
    )
}