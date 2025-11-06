"use client";
import useVehicles from "@/src/hooks/useVehicles";
import Link from "next/link";
import { VehicleCard, SkeletonLoading } from "../../src/components";

const Portal = () => {
    const { vehicles, isLoading, isError } = useVehicles()

    return (
        <div className="flex flex-col gap-7 p-2 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <h1 className="text-3xl font-black leading-tight tracking-tight">Vehicle Fleet</h1>
                <nav className="flex gap-2 justify-start md:justify-end text-blue-600 cursor-pointer text-center items-end">
                    <Link href="/" className="bg-blue-50 w-20 h-10 rounded-xl text-sm pt-2.5">Go home</Link>
                    <Link href="/vehicle/new" className="bg-blue-50 w-30 h-10 rounded-2xl text-center text-sm pt-2.5" >Add Vehicle</Link>
                </nav>
            </div>
            {isLoading && <SkeletonLoading />}
            {isError && <p>Lo sentimos, no se pudo cargar la información.
            </p>}
            <VehicleCard vehicles={vehicles} />
        </div >
    )
}

export default Portal;
