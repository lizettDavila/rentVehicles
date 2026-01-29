"use client";
import useVehicles from "@/src/hooks/useVehicles";
import Link from "next/link";
import { VehicleCard, SkeletonLoading } from "../../src/components";

const Portal = () => {
    const { vehicles, isLoading, isError } = useVehicles()

    return (
        <div className="relative flex flex-col gap-7">
            <div className=" pt-4 pb-2 px-8 w-full sticky z-10 top-0 grid grid-cols-1 md:grid-cols-2 bg-gray-900/30 backdrop-blur-md">
                <h1 className="text-3xl text-neutral-400 font-black text-center md:text-start leading-tight tracking-tight mb-4 md:mb-0">Vehicles List</h1>
                <nav className="flex gap-4 justify-center md:justify-end text-white cursor-pointer text-center items-end">
                    <Link href="/" className="bg-yellow-500/80 hover:bg-yellow-500 hover:scale-105 hover:duration-300 hover:ease-in-out w-full max-w-[150px] py-2 px-4 h-auto rounded-md text-md font-bold">Leave</Link>
                    <Link href="/vehicle/new" className="bg-emerald-500/80 hover:bg-emerald-500 hover:scale-105 hover:duration-300 hover:ease-in-out max-w-[150px] py-2 px-4 w-full h-auto rounded-md text-center text-md font-bold" >Add a vehicle</Link>

                </nav>
            </div>
            <div className="px-8">
                {isLoading && <SkeletonLoading />}
                {isError && <p>Lo sentimos, no se pudo cargar la información.
                </p>}
                <VehicleCard vehicles={vehicles} />
            </div>
        </div >
    )
}

export default Portal;
