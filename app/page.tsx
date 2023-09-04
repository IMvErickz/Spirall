import { MessagesSquare } from "lucide-react";

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center bg-zinc-900'>
      <MessagesSquare color="white" size={260} />
      <p className="text-white text-6xl font-semibold">Inicie uma conversa</p>
    </main>
  )
}
