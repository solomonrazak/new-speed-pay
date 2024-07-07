import { createContext, useContext, useState } from "react";
import { UserDetails } from "../../types";
import { UserContextType } from "../../types";

const defaultUserDetails: UserDetails = {
  access: null,
  department: null,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const userContext = createContext<UserContextType>({
    ...defaultUserDetails,
    setAccess: () => {},
    setDepartment: () => {},
    setFirstName: () => {},
    setLastName: () => {},
    setEmail: () => {},
    setPhoneNumber: () => {},
  });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [access, setAccess] = useState("");
  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const value: UserContextType = {
    access,
    department,
    firstName,
    lastName,
    email,
    phoneNumber,
    setAccess,
    setDepartment,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

// consumer function
export function useUserContext() {
  const {
    access,
    department,
    firstName,
    lastName,
    email,
    phoneNumber,
    setAccess,
    setDepartment,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
  } = useContext(userContext);

  return {
    access,
    department,
    firstName,
    lastName,
    email,
    phoneNumber,
    setAccess,
    setDepartment,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
  };
}
