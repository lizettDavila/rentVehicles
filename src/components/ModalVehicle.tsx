
import { FC } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import useDeleteVehicleMutation from "../hooks/useDeleteVehicleMutation";
import { Vehicles } from "../interfaces/vehicles";

interface ModalVehicleProps {
    open: boolean;
    handleCloseModal: () => void;
    vehicle: Vehicles
}

export const ModalVehicle: FC<ModalVehicleProps> = ({ open, vehicle, handleCloseModal }) => {

    const deleVehicle = useDeleteVehicleMutation(vehicle.id)

    const handleDelete = () => {
        deleVehicle.mutate()
        handleCloseModal()
    }

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ zIndex: 700 }}
        >
            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-70 bg-gray-900 p-8 outline-none rounded-lg">
                <Typography className="text-gray-400 text-center" sx={{ fontWeight: 600 }} id="modal-modal-title" variant="h6" component="h2">
                    Do you want to delete this vehicle?
                </Typography>

                <div className="flex flex-col justify-center items-center">
                    <Typography className="text-gray-500" id="modal-modal-title" variant="body1" component="p" >
                        <strong>Plate:</strong> {vehicle?.plate}
                    </Typography>
                    <Typography className="text-gray-500" id="modal-modal-title" variant="body1" component="p" >
                        <strong>Model:</strong> {vehicle?.model}
                    </Typography>
                    <Typography className="text-gray-500" id="modal-modal-title" variant="body1" component="p" >
                        <strong>Type:</strong> {vehicle?.type}
                    </Typography>
                </div>

                <div className="flex justify-center mt-4 gap-8">
                    <button disabled={deleVehicle.isPending} onClick={handleDelete} className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 rounded-md">Yes, I do</button>
                    <button onClick={handleCloseModal} className="px-4 py-2 w-full rounded-md bg-yellow-500 hover:bg-yellow-600">No, I don't</button>
                </div>
            </Box>
        </Modal >
    )
}
