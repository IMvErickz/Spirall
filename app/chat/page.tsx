import { MoreVertical, SendHorizontal, UserCircle } from "lucide-react";

export default function Chat() {
    return (
        <main className="w-full flex flex-col items-start justify-center bg-zinc-900">
            <header className="w-full h-28 flex flex-row items-center justify-center bg-zinc-950">
                <div className="w-full flex flex-row items-center justify-start pl-4 space-x-8">
                    <UserCircle color="white" size={80} />
                    <h1 className="text-white font-bold text-5xl">Nome</h1>
                </div>
                <div className="flex items-center justify-center">
                    <MoreVertical color="white" size={60} />
                </div>
            </header>
            <section className="w-full h-full flex"></section>
            <section className="w-full h-28 flex flex-row items-center justify-center bg-zinc-950">
                <div className="w-full h-full flex items-center justify-center px-8">
                    <input type="text" className="w-full h-14 bg-zinc-700 rounded-lg" />
                </div>
                <div className="w-max flex items-center justify-center pr-4">
                    <button className="bg-violet-950 w-24 h-14 flex items-center justify-center rounded-lg hover:bg-violet-800 transition-colors">
                        <SendHorizontal color="white" size={40} />
                    </button>
                </div>
            </section>
        </main>
    )
}