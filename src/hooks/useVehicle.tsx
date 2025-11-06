import { useQuery } from "@tanstack/react-query"
import { getVehicleById } from "../services/actions"
import { Vehicles } from "../interfaces/vehicles"

const useVehicle = (id: string) => {

    const { data, isLoading, error, isError, isFetching } = useQuery({
        queryKey: ['vehicle', id],
        queryFn: async () => {
            if (id !== 'new') {
                const data = await getVehicleById(id)
                return data
            } else {
                return {
                    driver_id: "",
                    driver_name: "",
                    plate: "",
                    model: "",
                    type: "",
                    capacity: "",
                    creation_date: "",
                    id: "",
                    city: ""
                }
            }
        }
    })

    return {
        data,
        isLoading,
        error,
        isError,
        isFetching
    }
}

export default useVehicle
