import { useState } from "react";
import { animals } from "./dataOne";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Select, SelectItem} from "@nextui-org/react";
import { useServiceContext } from "../context/ServiceContext";
import ServiceOut from "./ServiceOut";

interface IUserFormInput {
  department: string;
  categories: string;
  services: string;
  fees: string;
}

const NewService = () => {
    const [showOut, setShowOut] = useState(false);
    const [hideCom, setHideCom] = useState(false);

  const {
    department,
    categories,
    services,
    fees,
    setDepartment,
    setCategories,
    setServices,
    setFees,
  } = useServiceContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    console.log(data);
    setShowOut(true);
    setHideCom(true);
  };
  return (
    <div>
        {!hideCom && 
      <div>
        <h1 className="text-center mb-2">Add New Service</h1>
        <p className="text-center">Kindly Enter or upload details</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 grid-rows-2 gap-7 mt-5 mb-4">
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
                <span className="text-red-500 block">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <Controller
                name="categories"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    items={animals}
                    label="Categories"
                    placeholder="Select"
                    variant="bordered"
                    radius="none"
                    className="w-[300px] bg-white"
                    {...field}
                    value={categories || ""}
                    onChange={(e) => {
                      field.onChange(e);
                      setCategories(e.target.value);
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
              {errors.categories && (
                <span className="text-red-500 block">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <Controller
                name="services"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    items={animals}
                    label="Services"
                    placeholder="Select"
                    variant="bordered"
                    radius="none"
                    className="w-[300px] bg-white"
                    {...field}
                    value={services || ""}
                    onChange={(e) => {
                      field.onChange(e);
                      setServices(e.target.value);
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
              {errors.services && (
                <span className="text-red-500 block">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <Controller
                name="fees"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    items={animals}
                    label="Fees"
                    placeholder="Select"
                    variant="bordered"
                    radius="none"
                    className="w-[300px] bg-white"
                    {...field}
                    value={fees || ""}
                    onChange={(e) => {
                      field.onChange(e);
                      setFees(e.target.value);
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
              {errors.fees && (
                <span className="text-red-500 block">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <p className="text-center font-thin underline">Generate Template</p>
          <p className="text-center font-thin underline">Upload</p>

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
    showOut && <ServiceOut />
}
    </div>
  );
};

export default NewService;
