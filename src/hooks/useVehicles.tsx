import { useQuery } from "@tanstack/react-query"
import { getVehicles} from "../services/actions"
import useDrivers from "./useDrivers"

const useVehicles = () => {

    const { data: vehicles = [], isLoading, error, isError, isFetching } = useQuery({
        queryKey: ['vehicles'],
        queryFn: () => getVehicles()
    })

    const driversQuery = useDrivers()

    
    vehicles?.map((vehicleValue) => {
        driversQuery?.drivers?.map((driver) => {
            if(String(vehicleValue.driver_id) === String(driver.id))
            vehicleValue.driver_name = `${driver.first_name} ${driver.last_name}`
        })

    })

    return {
        vehicles,
        isLoading: isLoading && driversQuery.isLoading,
        error: error && driversQuery.error,
        isError: isError && driversQuery.isError,
        isFetching: isFetching && driversQuery.isFetching
    }
}

export default useVehicles
