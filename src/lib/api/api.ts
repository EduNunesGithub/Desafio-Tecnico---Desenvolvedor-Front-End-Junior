export type VehicleFunction = () => Promise<Vehicle>;

export const vehicle: VehicleFunction = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/vehicle`);
  const data: Vehicle = await response.json();

  return data;
};

export const api = {
  vehicle: vehicle,
};
