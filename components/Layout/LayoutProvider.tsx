'use client'

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Aside } from '../Chats/Aside/Aside';

export const LayoutProvider = () => {
    const pathname = usePathname();
    return (
        <>
            {(pathname != "/login" && pathname != "/register") && <Aside />}
        </>
    )
};