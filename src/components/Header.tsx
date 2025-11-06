
'use client';

import Image from "next/image"
import Link from "next/link";
import Button from "@mui/material/Button";
import CarIcon from "@/public/car.svg";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 px-10 py-3.5 border-b border-blue-200 shadow-sm shadow-blue-200 bg-(--background)/70 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <Image src={CarIcon} alt="Logo" width={25} height={25} />
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Cars Platform</h2>
            </div>
            <div className="flex justify-end">
                <Button variant="contained" color="primary" size="small" type="button" className=" w-28 flex gap-[0.5px]">
                    <Link href="/portal" className="flex items-center justify-center w-full h-full">
                        View portal
                    </Link>
                </Button>
            </div>
        </header>
    )
}
