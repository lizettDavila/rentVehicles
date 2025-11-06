"use client"
import { useParams } from "next/navigation"
import { VehicleForm } from "@/src/components"
import useDrivers from "@/src/hooks/useDrivers"
import useVehicle from "@/src/hooks/useVehicle"

const Vehicle = () => {
    const { slug } = useParams()
    const { drivers } = useDrivers()
    const { data, isLoading } = useVehicle(String(slug))

    return (
        <div className="w-full h-full flex flex-col gap-4 items-center p-4">
            <div className="w-full max-w-md">
                {isLoading && <div>Cargando...</div>}
                {data && <VehicleForm drivers={drivers} vehicleById={data} />}

            </div>
        </div>
    )
}

export default Vehicle;