import { useQuery } from "@tanstack/react-query"
import { getDrivers } from "../services/actions"

const useDrivers = () => {
    const { data: drivers = [], isLoading, error, isError, isFetching } = useQuery({
        queryKey: ['drivers'],
        queryFn: () => getDrivers()
    })
    return {
        drivers,
        isLoading,
        error,
        isError,
        isFetching
    }
}

export default useDrivers
