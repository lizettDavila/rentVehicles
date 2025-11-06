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
                            <Skeleton variant="rounded" height={230} sx={{ backgroundColor: 'oklch(37.3% 0.034 259.733)', }} />
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    )
}

