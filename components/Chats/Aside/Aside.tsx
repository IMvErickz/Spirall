import { PenSquare, Settings, UserCircle } from "lucide-react";
import Link from "next/link";

export function Aside() {
    return (
        <aside className="w-96 h-full bg-zinc-950 flex flex-col items-center justify-center">
            <header className="w-full flex flex-row items-center justify-center space-x-4">
                <h1 className="text-white text-5xl font-bold leading-relaxed">Chats</h1>
                <Link href='/chat'>
                    <PenSquare color="white" size={32} />
                </Link>
            </header>
            <section className="w-full flex items-center justify-center pt-4">
                <input type="text" className="w-[244px] h-7 rounded-lg bg-zinc-700 outline-zinc-800 transition-colors text-white px-2" />
            </section>
            <section className="w-full h-full flex items-center justify-center"></section>
            <section className="w-full h-20 bg-zinc-700 flex flex-row items-center justify-center">
                <div className="w-full flex flex-row items-center justify-start pl-4 space-x-2">
                    <UserCircle color="white" size={45} />
                    <p className="text-white font-semibold">Nome</p>
                </div>
                <div className="flex pr-2">
                    <Settings color="white" size={40} />
                </div>
            </section>
        </aside>
    )
}