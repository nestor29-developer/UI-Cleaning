"use client";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BuildingOffice2Icon,
  FaceSmileIcon,
  HomeModernIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CompanyLogo } from "components/logo";
import { Button } from "components/ui/button";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";

const solutions = [
  {
    name: "Hogares",
    href: "#",
    icon: HomeModernIcon,
  },
  {
    name: "Oficinas",
    href: "#",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Trabaja con nosotros",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Cuidado de niños",
    href: "#",
    icon: FaceSmileIcon,
  },
];

export const Header = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-8">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1 md:space-x-10">
            <div>
              <CompanyLogo />
            </div>

            <div className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-[#5f2698] cursor-pointer hidden md:block">
              Trabaja con nosotros
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div
              className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-[#5f2698] cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Iniciar Sesión
            </div>
            <Button
              type="primary"
              description="Registrate"
              className="w-[135px] h-[36px] px-8 ml-8 rounded-md text-white text-sm font-semibold"
              handleClick={() => setOpenModal(true)}
            />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5"> 
                <Button
                  type="primary"
                  description="Registrate"
                  className="flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-white text-sm font-semibold"
                  handleClick={() => setOpenModal(false)}
                />
                <p className="mt-6 text-center text-base font-medium text-gray-600">
                  ¿Ya tienes una cuenta?{" "}
                  <div
                    className="text-[#5f2698] hover:opacity-90"
                  >
                    Iniciar Sesión
                  </div>
                </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
