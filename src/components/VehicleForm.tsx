"use client"
import { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import useVehicleMutation from '../hooks/useCreateVehicleMutation';
import useUpdateVehicleMutation from '../hooks/useUpdateVehicleMutation';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Drivers, Vehicles } from '../interfaces/vehicles';
import cities from '../resources/cities';
import { BorderBottom } from '@mui/icons-material';

interface VehicleProps {
    drivers: Drivers[];
    vehicleById: any;
}
const styleTextField = {
    color: 'oklch(70.7% 0.022 261.325)',
    fontSize: '14px',
    autoComplete: 'off',


};

const styleInput = {
    '& .MuiSvgIcon-root': {
        color: 'white',
    },
    '&::before': {
        borderBottom: '1px solid white',
        borderColor: 'white',
        color: 'white'
    },
    '&:hover::before': {
        borderColor: 'white !important',
        color: 'white'
    },
    '&:hover::after': {
        borderColor: 'white !important',
        color: 'white'
    },
    '&.Mui-focused': {
        borderColor: 'white',
    },

}

const styleField = {
    '& .MuiTextField-root': {
        color: 'white',
        borderColor: 'white',
    },
    '& .MuiFilledInput-root:before': {
        borderColor: 'white',
    },
    '& .MuiFilledInput-root::after': {
        borderColor: 'white',
    },
    '&:hover .MuiFilledInput-root::before': {
        borderColor: 'white',
    },
    '&.Mui-focused .MuiFilledInput-root': {
        borderColor: 'white',
    },
    '& .MuiSelect-iconFilled': {
        color: 'white',
    },
}

export const VehicleForm: FC<VehicleProps> = ({ drivers, vehicleById }) => {
    const router = useRouter();
    const vehicleMutation = useVehicleMutation();
    const vehicleUpdateMutation = useUpdateVehicleMutation();

    const { control, handleSubmit, formState: { errors } } = useForm<Vehicles>({
        defaultValues: {
            driver_id: vehicleById?.driver_id ?? "",
            plate: vehicleById?.plate ?? "",
            model: vehicleById?.model ?? "",
            type: vehicleById?.type ?? "",
            capacity: vehicleById?.capacity ?? "",
            creation_date: vehicleById?.creation_date ?? new Date(),
            id: vehicleById?.id ?? "",
            city: vehicleById?.city ?? "",
        },
    })

    const onSubmit = (data: any) => {
        if (vehicleById.id !== '') {

            vehicleUpdateMutation.mutate(data)
        } else {

            vehicleMutation.mutate(data)
        }
    }

    useEffect(() => {
        if (vehicleMutation.isSuccess || vehicleUpdateMutation.isSuccess) router.push('/portal')
    }, [vehicleMutation.isSuccess, vehicleUpdateMutation.isSuccess])

    return (

        <form id='form_vehicle' onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border-2 px-4.5 py-8 rounded-lg border-gray-800 bg-gray-800 shadow-blue-400/10 shadow-md w-full">
            <h4 className="text-emerald-500 text-2xl w-full text-center font-bold pb-2"> Add or Edit a Vehicle </h4>

            <Controller
                name="driver_id"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <FormControl>
                    <InputLabel id="select_driver" sx={{ color: 'oklch(70.7% 0.022 261.325) !important', fontSize: '14px' }}>Driver</InputLabel>
                    <Select {...field} error={!!errors.driver_id} label='Driver' variant='filled' labelId="select_driver"
                        id="simple-select"
                        sx={{ ...styleInput, borderColor: 'white', color: 'white' }}
                    >
                        {drivers.map((driver) => (
                            <MenuItem id='driver' key={driver.id} value={driver.id}>
                                {driver.first_name} {driver.last_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>}
            />

            {
                errors?.driver_id?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>Driver is required.</p>)
            }

            <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <FormControl>
                        <InputLabel id="select_city" sx={{ color: 'oklch(70.7% 0.022 261.325) !important', fontSize: '14px' }}>City</InputLabel>
                        <Select {...field} error={!!errors.city} id='select_cities' labelId='select_city' label="City" variant='filled' sx={{ ...styleInput, borderColor: 'white', color: 'white' }} >
                            {cities.map((city) => (
                                <MenuItem id='city_dropdown' key={city.id} value={city.code}>
                                    {city.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                }
            />
            {
                errors?.city?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>City is required.</p>)
            }

            <Controller
                name="plate"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField {...field} error={!!errors.plate} autoComplete="off" id='plate_input' label="Vehicle Plate" variant="filled" slotProps={{ inputLabel: { style: styleTextField }, input: { style: { color: 'white' } } }} sx={styleField} />}
            />
            {
                errors?.plate?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>Plate is required.</p>)
            }

            <Controller
                name="model"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField {...field} error={!!errors.model} autoComplete="off" id='model_input' label="Vehicle Model" variant="filled" slotProps={{ inputLabel: { style: styleTextField }, input: { style: { color: 'white' } } }} sx={styleField} />}
            />
            {
                errors?.model?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>Model is required.</p>)
            }

            <Controller
                name="type"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField {...field} error={!!errors.type} autoComplete="off" id='type_input' label="Vehicle Type" variant="filled" slotProps={{ inputLabel: { style: styleTextField }, input: { style: { color: 'white' } } }} sx={styleField} />}
            />
            {
                errors?.type?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>Type is required.</p>)
            }

            <Controller
                name="capacity"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField {...field} error={!!errors.capacity} autoComplete="off" id='capacity_input' label="Vehicle Capacity" variant="filled" slotProps={{ inputLabel: { style: styleTextField }, input: { style: { color: 'white' } } }} sx={styleField} />}
            />
            {
                errors?.capacity?.type === "required" && (
                    <p role="alert" className='text-sm text-red-500'>Capacity is required.</p>)
            }

            <div className='flex justify-between gap-3 mt-2'>
                <button disabled={vehicleMutation.isPending} color="primary" type="submit" className="w-full bg-emerald-500 py-2 px-4 rounded-md text-md font-bold hover:bg-emerald-600 cursor-pointer">Save </button>
                <button color="secondary" type="button" className=" w-full bg-yellow-500 py-2 px-4 rounded-md text-md font-bold hover:bg-yellow-600 cursor-pointer" onClick={() => router.push('/portal')}>Cancel </button>
            </div>
        </form >

    )
}

