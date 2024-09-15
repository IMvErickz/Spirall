'use client'

import { InputArea } from "@/components/Chats/SendMessage/InputArea";
import { api } from "@/lib/axios";
import { MoreVertical, SendHorizontal, UserCircle } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import io from 'socket.io-client';

interface DataProps {
    Message: string
}

const socket = io(String(process.env.NEXT_PUBLIC_API_URL),{
    timeout: 5000
});

export default function Chat({ params }: { params: { id: string } }) {

    const [message, setMessage] = useState('')
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        // Configuração do evento de recebimento de mensagem
        socket.on(params.id, (msg) => {
            setData([...data, msg]);
        });

        socket.emit('dynamic event', {eventName: params.id, message})

        // Limpeza de eventos quando o componente é desmontado
        return () => {
            socket.off(params.id);
        };
    }, [data]);

    const handleSendMessage = (e: FormEvent<Element>) => {
        e.preventDefault();
        socket.emit(params.id, message)
        socket.emit('dynamic event', {eventName: params.id, message})
        setMessage('');
    };

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
                        {data.map(msg => {
                            return (
                                <span className="text-white text-xl">{msg}</span>
                            )
                        })}
                    </li>
                </ul>
            </section>
            <InputArea value={message} onSubmit={handleSendMessage} onChange={event => setMessage(event.target.value)} />
        </main>
    )
}