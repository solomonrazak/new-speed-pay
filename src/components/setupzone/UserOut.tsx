import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Vector from "../../assets/images/Vector.png";
import NewUser from "./NewUser";

const UserOut = () => {
  const { access, department, firstName, lastName, email, phoneNumber } =
    useUserContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showNewUser, setShowNewUser] = useState(false);
  const [hidePre, setHidePre] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    setShowNewUser(true);
    setHidePre(true);
  }

  

  return (
    <div>
    {!hidePre &&
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
      <p className="text-center text-slate-900 font-medium mt-5">
        Do you want to save this user?
      </p>
      <div className="flex justify-center gap-3 mt-3">
        <Button
          onPress={onOpen}
          className="bg-slate-900 text-white rounded-md font-medium"
        >
          Yes
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          className="w-[350px]"
          radius="none"
        >
          <ModalContent>
            <>
              <ModalBody>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-green-100 w-7 h-7 p-2 rounded-full mt-10">
                    <img
                      src={Vector}
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                  </div>
                </div>

                <p className="text-center text-slate-900 font-medium">Great</p>
                <p className="text-center font-thin mt-[-10px] mb-5">
                  Service added Successfully
                </p>
                <button
                  className="bg-slate-900 text-white p-1"
                  onClick={() => navigate("/admin/overview")}
                >
                  Go back To Dashboard
                </button>
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
        <button
          className="bg-slate-900 text-white px-10 rounded-md"
          onClick={goBack}
        >
          No
        </button>
      </div>
    </div>
    }
    {
        showNewUser && <NewUser />
    }
    </div>
  );
};

export default UserOut;
