
import { Select, SelectItem, Input } from "@nextui-org/react";
import { animals } from "./dataOne";
import { useUserContext } from "../context/UserContext";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { useState } from "react";
import UserOut from "./UserOut";

interface IUserFormInput {
  department: string;
  access: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}


const NewUser = () => {
  const [showOut, setShowOut] = useState(false);
  const [hideCom, setHideCom] = useState(false);
 


  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    console.log(data);
    setShowOut(true);
    setHideCom(true);
  };

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
  } = useUserContext();

  return (
    <div>
      {!hideCom && 
    <div className="w-full mx-auto">
      <h1 className="text-center mb-5">Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-7 mb-5">
          <div>
          <Controller
            name="access"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                items={animals}
                label="Access"
                placeholder="Select"
                variant="bordered"
                radius="none"
                className="w-[300px] bg-white"
                {...field}
                value={access || ""}
                onChange={(e) => {
                  field.onChange(e);
                  setAccess(e.target.value);
                }}
              >
                {(animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                )}
              </Select>
            )}
          />
          {errors.access && (
            <span className="text-red-500 block">This field is required</span>
          )}
          </div>
          <div>
          <Controller
            name="department"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                items={animals}
                label="Department"
                placeholder="Select"
                variant="bordered"
                radius="none"
                className="w-[300px] bg-white"
                {...field}
                value={department || ""}
                onChange={(e) => {
                  field.onChange(e);
                  setDepartment(e.target.value);
                }}
              >
                {(animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                )}
              </Select>
            )}
          />
          {errors.department && (
            <span className="text-red-500 w-full block">This field is required</span>
          )}
          </div>
        </div>
        <div className="flex gap-7 mb-5">
          <div>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="text"
                label="firstName"
                variant="bordered"
                className="bg-white w-[300px]"
                radius="none"
                placeholder="Solomon"
                {...field}
                value={firstName}
                onChange={(e) => {
                  field.onChange(e);
                  setFirstName(e.target.value);
                }}
              />
            )}
          />
          {errors.firstName && (
            <span className="text-red-500 block">This field is required</span>
          )}
          </div>
          <div>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="text"
                label="lastName"
                variant="bordered"
                className="bg-white w-[300px]"
                radius="none"
                placeholder="Razak"
                {...field}
                value={lastName}
                onChange={(e) => {
                  field.onChange(e);
                  setLastName(e.target.value);
                }}
              />
            )}
          />
          {errors.lastName && (
            <span className="text-red-500">This field is required</span>
          )}
          </div>
        </div>
        <div className="flex gap-7">
          <div>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="email"
                label="Email Address"
                variant="bordered"
                className="bg-white w-[300px]"
                radius="none"
                placeholder="Email Address"
                {...field}
                value={email}
                onChange={(e) => {
                  field.onChange(e);
                  setEmail(e.target.value);
                }}
              />
            )}
          />
          {errors.email && (
            <span className="text-red-500 block">This field is required</span>
          )}
          </div>
          <div>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="text"
                label="Phone"
                variant="bordered"
                className="bg-white w-[300px]"
                radius="none"
                placeholder="phone number"
                {...field}
                value={phoneNumber}
                onChange={(e) => {
                  field.onChange(e);
                  setPhoneNumber(e.target.value);
                }}
              />
            )}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">This field is required</span>
          )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
}
{
  showOut && <UserOut />
}
    </div>
  );
};

export default NewUser;

