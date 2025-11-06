import { useQueryClient, useMutation } from "@tanstack/react-query"
import { updateVehicle } from "../services/actions"
import { Vehicles } from "../interfaces/vehicles"

const useUpdateVehicleMutation = () => {
  const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:  updateVehicle,
        onSuccess: (vehicle, variables) => {
             queryClient.setQueryData<Vehicles[]>(
                ['vehicle', variables.id],
                vehicle
            ) 
        }
    })
    return mutation
}

export default useUpdateVehicleMutation
