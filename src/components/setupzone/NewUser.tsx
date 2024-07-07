import { Select, SelectItem, Input } from "@nextui-org/react";
import { animals } from "./dataOne";
import { useUserContext } from "../context/UserContext";

const NewUser = () => {

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
      <form>
      <div className="flex gap-7 mb-5">
        <Select
          items={animals}
          label="Access"
          placeholder="Select an animal"
          variant="bordered"
          radius="none"
          className="w-[300px] bg-white"
          value={access || undefined}
          onChange={handleSelectChange(setAccess)}
        >
          {(animal) => (
            <SelectItem key={animal.key} value={animal.key}>
              {animal.label}
            </SelectItem>
          )}
        </Select>
        <Select
          items={animals}
          label="Department"
          placeholder="Select an animal"
          variant="bordered"
          radius="none"
          className="w-[300px] bg-white"
          value={department || undefined}
          onChange={handleSelectChange(setDepartment)}
        >
          {(animal) => (
            <SelectItem key={animal.key} value={animal.key}>
              {animal.label}
            </SelectItem>
          )}
        </Select>
      </div>
      <div className="flex gap-7 mb-5">
        <Input
          type="text"
          label="firstName"
          variant="bordered"
          name="input3"
          className="bg-white"
          radius="none"
          placeholder="Solomon"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          label="surName"
          variant="bordered"
          name="input3"
          className="bg-white"
          radius="none"
          placeholder="Razak"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        
      </div>
      <div className="flex gap-7">
      <Input
          type="email"
          label="Email Address"
          variant="bordered"
          name="input3"
          className="bg-white"
          radius="none"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          label="Phone"
          variant="bordered"
          name="input3"
          className="bg-white"
          radius="none"
          placeholder="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
            
        </div>
        <div className="flex justify-center">
            <button className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5">Continue</button>
        </div>
        </form>
    </div>
  );
};

export default NewUser;
