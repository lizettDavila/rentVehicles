
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
            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-70 bg-gray-900 p-4 outline-none rounded-lg">
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

                <div className="flex justify-center">
                    <Button sx={{ mt: 2, mr: 1 }} disabled={deleVehicle.isPending} variant="contained" color="info" onClick={handleDelete}>Yes, I do</Button>
                    <Button sx={{ mt: 2 }} variant="outlined" color="secondary" onClick={handleCloseModal}>No, I don't</Button>
                </div>
            </Box>
        </Modal>
    )
}
