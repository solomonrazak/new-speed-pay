import { createContext, useContext, useState } from "react";
import { ServiceContextType, ServiceDetails } from "../../types";

const defaultServiceDetails: ServiceDetails = {
  department: "",
  categories: "",
  services: "",
  fees: "",
};

export const serviceContext = createContext<ServiceContextType>({
  ...defaultServiceDetails,
  setDepartment: () => {},
  setCategories: () => {},
  setServices: () => {},
  setFees: () => {},
});

// provider

export const ServiceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [department, setDepartment] = useState("");
  const [categories, setCategories] = useState("");
  const [services, setServices] = useState("");
  const [fees, setFees] = useState("");

  const value: ServiceContextType = {
    department,
    categories,
    services,
    fees,
    setDepartment,
    setCategories,
    setServices,
    setFees,
  };

  return (
    <serviceContext.Provider value={value}>{children}</serviceContext.Provider>
  );
};

// consumer
export function useServiceContext() {
  const {
    department,
    categories,
    services,
    fees,
    setDepartment,
    setCategories,
    setServices,
    setFees,
  } = useContext(serviceContext);

  return {
    department,
    categories,
    services,
    fees,
    setDepartment,
    setCategories,
    setServices,
    setFees,
  };
}
