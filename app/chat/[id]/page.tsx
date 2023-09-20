'use client'

import { InputArea } from "@/components/Chats/SendMessage/InputArea";
import { api } from "@/lib/axios";
import { MoreVertical, SendHorizontal, UserCircle } from "lucide-react";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

interface DataProps {
    Message: string
}

export default function Chat({ params }: { params: { id: string } }) {

    const [message, setMessage] = useState('')
    const [data, setData] = useState<DataProps[]>([])

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault()
        if (!message) {
            alert('Não há nenhuma menssagem para enviar')
        } else {
            const handleMessageTrim = message.trim()
            await api.post('/send', {
                message: handleMessageTrim
            })
                .then(response => {
                    setData([response.data])
                    setMessage('')
                })
        }

    }

    useEffect(() => {
        data.map(e => {
            const li = (document.getElementById('li') as HTMLLIElement)
            const span = (document.createElement('span') as HTMLSpanElement)
            span.className = 'text-white'
            span.innerText = e.Message
            li.appendChild(span)
        })
    }, [data])

    return (
        <main className="w-full flex flex-col items-start justify-center bg-zinc-900">
            <header className="w-full h-28 flex flex-row items-center justify-center bg-zinc-950">
                <div className="w-full flex flex-row items-center justify-start pl-4 space-x-8">
                    <UserCircle color="white" size={80} />
                    <h1 className="text-white font-bold text-5xl">{params.id}</h1>
                </div>
                <div className="flex items-center justify-center">
                    <MoreVertical color="white" size={60} />
                </div>
            </header>
            <section className="w-full h-full flex">
                <ul>
                    <li id="li" className="w-full flex flex-col items-start justify-center">

                    </li>
                </ul>
            </section>
            <InputArea value={message} onSubmit={handleSendMessage} onChange={event => setMessage(event.target.value)} />
        </main>
    )
}