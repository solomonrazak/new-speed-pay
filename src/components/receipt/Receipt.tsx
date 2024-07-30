import React from 'react';
import ReceiptTable from './ReceiptTable';
import { TbArrowRightRhombus } from 'react-icons/tb';
import shipmentbox from '../../assets/images/shipmentbox.png'
import Vector from '../../assets/images/Vector.png';
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';

const Receipt: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <h1 className="font-medium text-center mb-2">Receipt</h1>
      <div className="border-1 border-gray-300 px-2 py-1 rounded-md">
        <div>
          <ReceiptTable />
        </div>
        <div className="flex flex-col items-end p-3 mr-16 gap-2">
          <div className="flex gap-24">
            <p className="text-[13px] font-light ml-[-20px]">Subtotal</p>
            <p className="text-[13px] font-medium">$1300</p>
          </div>
          <div className="flex gap-32">
            <p className="text-[13px] font-light">Tax</p>
            <p className="text-[13px] font-medium">20%</p>
          </div>
          <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
          <div className="flex gap-28">
            <p className="text-[13px] font-light">Due</p>
            <p className="text-[13px] font-medium">$1560</p>
          </div>
          <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
          <div className="flex gap-[6.5rem]">
            <p className="text-[13px] font-medium">Total</p>
            <p className="text-[13px] font-medium">$1560</p>
          </div>
        </div>
        <div className="bg-gray-200 flex items-center gap-24 p-1 rounded-md">
          <div className="">
            <p className="text-[14px] font-thin">Sold by:</p>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-yellow-100"></div>
                <div>
                  <p className="text-[12px] font-medium">FDA</p>
                  <p className="text-[14px] font-thin">Company Address</p>
                </div>
              </div>
            </div>
          </div>
          <TbArrowRightRhombus className="text-[30px] font-light w-10" />
          <div className="">
            <p className="text-[14px] font-thin">Customer</p>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-yellow-100"></div>
                <div>
                  <p className="text-[12px] font-medium">Adom Merch</p>
                  <p className="text-[14px] font-thin">Customer Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-5">
          <div className="w-[200px] border-1 border-gray-400 rounded-lg flex items-center flex-col px-10 py-5">
            <div className="bg-yellow-100 h-10 w-10 rounded-full p-2">
              <img src={shipmentbox} alt="Shipment Box" />
            </div>
            <p className="text-[9px] font-thin">Total Quantity</p>
            <p>4 products</p>
          </div>
          <div className="w-[200px] border-1 border-gray-400 rounded-lg flex items-start flex-col px-3 gap-2 py-5 bg-slate-950 text-white">
            <p className="text-[13px] font-thin">Total Price</p>
            <p>$1560.00</p>
            <div className="bg-green-800 px-1 rounded-xl">
              <p>Paid</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <Button
          onPress={onOpen}
          className="bg-slate-900 text-white rounded-md font-medium w-[10rem]"
        >
          Print Receipt
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
                      alt="Vector"
                    />
                  </div>
                </div>
                <p className="text-center text-slate-900 font-medium">
                  Great
                </p>
                <p className="text-center font-thin mt-[-10px] mb-5">
                  User has been added Successfully
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-gray-400 text-white p-1 w-[9rem]">
                    No
                  </button>
                  <button className="bg-slate-900 text-white p-1 w-[9rem]">
                    Yes
                  </button>
                </div>
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
        <Button
          onPress={onOpen}
          className="bg-slate-900 text-white rounded-md font-medium w-[10rem]"
        >
          Send via Email
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
                      className="object-contain"
                      alt="Vector"
                    />
                  </div>
                </div>
                <p className="text-center text-slate-900 font-medium">
                  Great
                </p>
                <p className="text-center font-thin mt-[-10px] mb-5">
                  User has been added Successfully
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-gray-400 text-white p-1 w-[9rem]">
                    No
                  </button>
                  <button className="bg-slate-900 text-white p-1 w-[9rem]">
                    Yes
                  </button>
                </div>
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Receipt;
