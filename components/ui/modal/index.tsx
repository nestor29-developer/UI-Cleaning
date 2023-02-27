import { Dialog, Transition } from "@headlessui/react";
import { Montserrat } from "@next/font/google";
import { Login } from "components/client/login";
import { isSafari } from "components/common/utils";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../button";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { motion, AnimatePresence } from "framer-motion";

import { Tooltip } from "flowbite-react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const Modal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const isSafariBrowser = isSafari();
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => false}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/80 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto font-montserrat">
          <div className="flex h-screen justify-center text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`${montserrat.className} relative transform bg-white text-left transition-all w-[20%]`}
              >
                <AnimatePresence>
                  <motion.div
                    animate={{
                      scale: [2, 1, 1, 1, 1],
                      rotate: [0, 1.5, 0, 0, 0],
                    }}
                  >
                    <div className="bg-white px-4">
                      <div className="flex justify-between">
                        <Dialog.Title className="leading-6 text-[#5f269b] font-normal text-lg mt-6">
                          Crear cuenta
                        </Dialog.Title>
                        <div className="cursor-pointer">
                          <Tooltip
                            arrow={true}
                            content="Cerrar"
                            style="light"
                            placement="top"
                            animation="duration-500"
                            className="text-gray-600 w-auto px-4 h-7 flex justify-center items-center -mt-2 border-gray-300 rounded-lg drop-shadow-md text-xs"
                          >
                            <motion.div whileHover={{ scale: 1.2 }}>
                              <XMarkIcon
                                className="h-6 w-6 text-[#5f2698] hover:text-purple-900"
                                aria-hidden="true"
                                onClick={() => setOpenModal(false)}
                              />
                            </motion.div>
                          </Tooltip>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Login />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* <div className="py-4 mb-1 flex items-center px-10">
                  <div>
                    <span className="text-[#364152] font-[400] text-xs">
                      Formats supported: XLS, XSLX, CSV
                    </span>
                  </div>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
