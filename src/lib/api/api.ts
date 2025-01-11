export type CompanyFunction = () => Promise<Company>;

export type VehicleFunction = () => Promise<Vehicle>;

export const company: CompanyFunction = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/company`);
  const data: Company = await response.json();

  return data;
};

export const vehicle: VehicleFunction = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/vehicle`);
  const data: Vehicle = await response.json();

  return data;
};

export const api = {
  company: company,
  vehicle: vehicle,
};
