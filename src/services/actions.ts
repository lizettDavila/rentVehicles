import { vehiclesApi } from "@/app/api/vehiclesApi";
import { Vehicles, Drivers } from "../interfaces/vehicles";

export const getVehicles = async (): Promise<Vehicles[]> => {
  const { data } = await vehiclesApi.get<Vehicles[]>("/vehicle");
  return data;
};

export const getVehicleById = async (id:string): Promise<Vehicles> => {
  const { data } = await vehiclesApi.get<Vehicles>(`/vehicle/${id}`);
  return data;
};

export const getDrivers = async (): Promise<Drivers[]> => {
  const { data } = await vehiclesApi.get<Drivers[]>("/driver");
  return data;
};

export const createVehicle = async (vehicle: Vehicles): Promise<Vehicles[]> => {
  const { data } = await vehiclesApi.post<Vehicles[]>("/vehicle", vehicle);
  return data;
};

export const updateVehicle = async (vehicle: Vehicles): Promise<Vehicles[]> => {
  const { data } = await vehiclesApi.put<Vehicles[]>(
    `/vehicle/${vehicle.id}`,
    vehicle
  );
  return data;
};

export const deleteVehicle = async (id: string): Promise<Vehicles[]> => {
  const { data } = await vehiclesApi.delete<Vehicles[]>(`/vehicle/${id}`);
  return data;
};
