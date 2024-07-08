export interface UserDetails {
    access: string | null;
    department: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;

}

export interface UserContextType extends UserDetails {
    setAccess: React.Dispatch<React.SetStateAction<string>>;
    setDepartment: React.Dispatch<React.SetStateAction<string>>;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  }

export interface ServiceDetails {
    department: string;
    categories: string;
    services: string;
    fees: string;
}  

export interface ServiceContextType extends ServiceDetails {
    setDepartment: React.Dispatch<React.SetStateAction<string>>;
    setCategories: React.Dispatch<React.SetStateAction<string>>;
    setServices: React.Dispatch<React.SetStateAction<string>>;
    setFees: React.Dispatch<React.SetStateAction<string>>;
  }
