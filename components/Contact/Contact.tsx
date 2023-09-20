import { UserCircle } from "lucide-react";
import Link from "next/link";

interface ContactProps {
    id: string
    name?: string
}

export function Contact(props: ContactProps) {
    return (
        <Link href={`/chat/${props.id}`} className="w-full h-16 flex flex-row space-x-4 items-center justify-start py-10">
            <UserCircle size={60} color="white" />
            <h3 className="text-white font-semibold text-2xl">{props.name}</h3>
        </Link>
    )
}