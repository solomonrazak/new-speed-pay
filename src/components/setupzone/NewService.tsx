import { useUserContext } from "../context/UserContext";

const NewService = () => {
  const { access, department, firstName, lastName, email, phoneNumber } =
    useUserContext();
  return (
    <div className="px-20">
      <h1 className="text-center mb-10 font-medium">Summary</h1>
      <div className="grid grid-cols-2 grid-row-3 gap-10">
        <div>
          <p className="text-gray-500">Access</p>
          <p>{access}</p>
        </div>
        <div>
          <p className="text-gray-500">Department</p>
          <p>{department}</p>
        </div>

        <div>
          <p className="text-gray-500">FirstName</p>
          <p>{firstName}</p>
        </div>
        <div>
          <p className="text-gray-500">LastName</p>
          <p>{lastName}</p>
        </div>

        <div>
          <p className="text-gray-500">Email Address</p>
          <p>{email}</p>
        </div>
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default NewService;
