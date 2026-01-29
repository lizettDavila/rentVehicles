"use client";
import { FC, useState } from "react"
import { useRouter } from 'next/navigation';
import { ModalVehicle } from "./ModalVehicle";
import { Vehicles } from "../interfaces/vehicles"
import { Trash2, Pencil, CarFront, User, BookA, HandHelping, BookType, Users, Calendar1 } from "lucide-react";

interface VehicleCardProps {
    vehicles: Vehicles[];
}

const stylesList: string = `flex gap-1`;
const stylesIcons: string = `text-yellow-200/50`;

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
                <div key={vehicle.id} className="bg-gray-900 p-4 rounded-md shadow-sm shadow-zinc-500 hover:scale-101"  >
                    <div className="flex gap-2">
                        <CarFront size={20} className="mt-1 text-emerald-500" />
                        <h2 className="text-xl font-semibold mb-4 text-foreground">Vehicle {vehicle.plate}:</h2>
                    </div>

                    <ul className="flex flex-col gap-3 text-amber-50 text-xs">
                        <li className={stylesList}> <User size={15} className={stylesIcons} />
                            <strong>Driver:</strong> {vehicle.driver_name}
                        </li>
                        <li className={stylesList}> <BookA size={15} className={stylesIcons} />  <strong>Plate:</strong> {vehicle.plate}</li>
                        <li className={stylesList}> <HandHelping size={15} className={stylesIcons} /> <strong>Model:</strong> {vehicle.model}</li>
                        <li className={stylesList}> <BookType size={15} className={stylesIcons} /> <strong>Type:</strong> {vehicle.type}</li>
                        <li className={stylesList}> <Users size={15} className={stylesIcons} /><strong>Capacity:</strong> {vehicle.capacity}</li>
                        <li className={stylesList}> <Calendar1 size={15} className={stylesIcons} /> <strong>Date:</strong> {vehicle.creation_date.toString().split('T')[0]}</li>
                    </ul>
                    <div className=" flex flex-row justify-between mt-3.5">
                        <button onClick={() => handlerDelete(vehicle)} className="flex items-center gap-2 text-red-400 text-sm border-2 border-red-400 rounded-md py-1 px-3 hover:text-red-500 hover:border-red-500 cursor-pointer">
                            <Trash2 size={15} />
                            Delete
                        </button>
                        <button onClick={() => router.push(`/vehicle/${vehicle.id}`)} className="flex items-center gap-2 text-emerald-500 text-sm border-2 border-emerald-500 rounded-md py-1 px-3 hover:text-emerald-600 hover:border-emerald-600 cursor-pointer">
                            <Pencil size={15} />
                            Edit
                        </button>
                    </div>
                </div>
            ))}
            <ModalVehicle open={open} handleCloseModal={handleCloseModal} vehicle={vehicle} />
        </section>
    )
}