'use client'

import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
    id: string
    GetUserId: (value: string) => void
    userId: string
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [id, setId] = useState<string>('')
    const [userId, setUserId] = useState<string>('')

    function GetUserId(value: String) {
        setId(String(value))
        localStorage.setItem('userId', id)
    }

    function UserId() {
        const userid = localStorage.getItem('userId')
        setUserId(String(userid))
    }

    UserId()

    return (
        <AuthContext.Provider value={{ id, GetUserId, userId }}>
            {children}
        </AuthContext.Provider>
    )
}