'use client'

import React from 'react';
import * as Separator from '@radix-ui/react-separator';

const SeparatorDemo = () => (
    <Separator.Root
        className="bg-zinc-700 h-[2px] rounded w-full"
        decorative
        orientation="horizontal"
    />
);

export default SeparatorDemo;