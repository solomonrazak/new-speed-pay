import { Select, SelectItem, Input } from "@nextui-org/react";
import { animals } from "./dataOne";
import { useUserContext } from "../context/UserContext";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";

interface IUserFormInput {
    department: string | null;
    access: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

const NewUser = () => {

  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors }} = useForm<IUserFormInput>();
  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    console.log(data);
    navigate("/admin/setup-zone/new-service")
  }

    const {access,
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
        setPhoneNumber} = useUserContext();

        const handleSelectChange = (setter: (value: string) => void) => (
            event: React.ChangeEvent<HTMLSelectElement>
          ) => {
            setter(event.target.value);
          };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-center mb-5">Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-7 mb-5">
        <Select
          items={animals}
          label="Access"
          placeholder="Select an animal"
          variant="bordered"
          radius="none"
          className="w-[300px] bg-white"
          {...register("access", { required: true })}
          value={access || undefined}
          onChange={handleSelectChange(setAccess)}
        >
          {(animal) => (
            <SelectItem key={animal.key} value={animal.key}>
              {animal.label}
            </SelectItem>
          )}
        </Select>
        {errors.access && <span className="text-red-500">This field is required</span>}
        <Select
          items={animals}
          label="Department"
          placeholder="Select an animal"
          variant="bordered"
          radius="none"
          className="w-[300px] bg-white"
          {...register("department", {required: true})}
          value={department || undefined}
          onChange={handleSelectChange(setDepartment)}
        >
          {(animal) => (
            <SelectItem key={animal.key} value={animal.key}>
              {animal.label}
            </SelectItem>
          )}
        </Select>
        {errors.department && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="flex gap-7 mb-5">
        <Input
          type="text"
          label="firstName"
          variant="bordered"
          
          className="bg-white"
          radius="none"
          {...register("firstName", {required: true})}
          placeholder="Solomon"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span className="text-red-500">This field is required</span>}
        <Input
          type="text"
          label="surName"
          variant="bordered"
          
          className="bg-white"
          radius="none"
          placeholder="Razak"
          {...register("lastName", {required: true})}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span className="text-red-500">This field is required</span>}
        
      </div>
      <div className="flex gap-7">
      <Input
          type="email"
          label="Email Address"
          variant="bordered"
          
          className="bg-white"
          radius="none"
          {...register("email", {required: true})}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="text-red-500">This field is required</span>}
        <Input
          type="text"
          label="Phone"
          variant="bordered"
         
          className="bg-white"
          radius="none"
          {...register("phoneNumber", {required: true})}
          placeholder="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
            
        </div>
        <div className="flex justify-center">
            <button className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5" type="submit">Continue</button>
        </div>
        </form>
    </div>
  );
};

export default NewUser;
