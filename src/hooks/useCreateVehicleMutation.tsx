import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createVehicle } from "../services/actions"
import { Vehicles } from '../interfaces/vehicles';


const useCreateVehicleMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createVehicle,
        onSuccess: (vehicle) => {
             queryClient.setQueryData<Vehicles[]>(
                ['vehicles'],
                (old: any) => {
                   
                    if (!old) return [];
                    return [...old, vehicle];
                }
            ) 
        }
    })
    return mutation
}

export default useCreateVehicleMutation
