"use client";
import { FC, useState } from "react"
import { useRouter } from 'next/navigation';
import { ModalVehicle } from "./ModalVehicle";
import { Vehicles } from "../interfaces/vehicles";
import { Card, CardActions, Button } from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"

interface VehicleCardProps {
    vehicles: Vehicles[];
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicles }) => {

    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const [vehicle, setVehicle] = useState<Vehicles>({
        driver_id: '',
        driver_name: '',
        plate: '',
        model: '',
        type: '',
        capacity: '',
        creation_date: new Date(),
        id: '',
        city: '',
    });

    const handlerDelete = (vehicle: Vehicles) => {
        setVehicle(vehicle)
        setOpen(true)
    };

    const handleCloseModal = () => setOpen(false)

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="p-4" sx={{ backgroundColor: 'oklch(21% 0.034 264.665)', boxShadow: 3 }} >
                    <h2 className="text-xl font-semibold mb-4 text-foreground">Vehicle {vehicle.plate}:</h2>

                    <ul className="flex flex-col gap-3 text-amber-50 text-xs">
                        <li>
                            <strong>Driver:</strong> {vehicle.driver_name}
                        </li>
                        <li> <strong>Plate:</strong> {vehicle.plate}</li>
                        <li> <strong>Model:</strong> {vehicle.model}</li>
                        <li> <strong>Type:</strong> {vehicle.type}</li>
                        <li> <strong>Capacity:</strong> {vehicle.capacity}</li>
                        <li> <strong>Date:</strong> {vehicle.creation_date.toString().split('T')[0]}</li>
                    </ul>
                    <CardActions className=" flex flex-row justify-between mt-3.5" sx={{ padding: 0 }}>
                        <Button size="small" variant="outlined" onClick={() => handlerDelete(vehicle)}>
                            <Delete fontSize="small" />
                            Delete
                        </Button>
                        <Button size="small" variant="outlined" onClick={()=>  router.push(`/vehicle/${vehicle.id}`)}    >
                            <Edit fontSize="small" />
                            Edit
                        </Button>
                    </CardActions>
                </Card>
            ))}
            <ModalVehicle open={open} handleCloseModal={handleCloseModal} vehicle={vehicle} />
        </section>
    )
}