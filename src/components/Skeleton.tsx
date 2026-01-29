import { Stack, Skeleton, Grid } from "@mui/material"

export const SkeletonLoading = () => {
    const rows = ['1', '2', '3', '4', '5', '6']
    return (
        <Stack spacing={3} sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {
                    rows.map((index) => (
                        <Grid key={index

                        } size={{ xs: 12, sm: 6, md: 4 }} >
                            <div className="h-auto w-full bg-gray-700/30 rounded-md p-4 flex flex-col gap-4">
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-44 h-6 mb-4"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="animate-pulse bg-gray-200/30 rounded-md w-24 h-3"></div>
                                <div className="w-full h-auto flex flex-row justify-between gap-x-44 items-center">
                                    <div className="animate-pulse bg-gray-200/30 rounded-md w-66 flex h-8"></div>
                                    <div className="animate-pulse bg-gray-200/30 rounded-md w-46 h-8"></div>
                                </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    )
}

