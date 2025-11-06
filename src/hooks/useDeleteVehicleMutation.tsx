
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteVehicle } from "../services/actions"


const useDeleteVehicleMutation = (vehicleId: string) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: () => deleteVehicle(vehicleId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vehicles'] })
        }
    })
    return mutation
}

export default useDeleteVehicleMutation
