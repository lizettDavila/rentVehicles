
'use client';

import Link from "next/link";
import { Car } from "lucide-react";

export const Header = () => {
    return (
        <header className="grid grid-cols-2 px-10 py-3.5 border-b border-yellow-100/30 shadow-sm shadow-yellow-500 bg-(--background)/70 backdrop-blur-md">
            <div className="flex items-center gap-3 text-white text-shadow-md text-shadow-emerald-300/25">
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Cars' Platform</h2>
                <Car size={30} />
            </div>
            <div className="flex justify-end">
                <button type="button" className="w-full flex gap-[0.5px] bg-emerald-700 rounded-md max-w-[150px] py-2 px-4 hover:scale-105 duration-300 ease-in-out">
                    <Link href="/portal" className="flex items-center justify-center w-full h-full font-bold">
                        View portal
                    </Link>
                </button>
            </div>
        </header>
    )
}
