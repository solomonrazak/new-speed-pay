export interface UserDetails {
    access: string | null;
    department: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;

}

export interface UserContextType extends UserDetails {
    setAccess: React.Dispatch<React.SetStateAction<string>>;
    setDepartment: React.Dispatch<React.SetStateAction<string>>;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  }