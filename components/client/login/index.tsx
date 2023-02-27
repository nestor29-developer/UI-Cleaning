import { Button } from "components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Login = () => {
  const [fullName, setFullName] = useState<string>('');
  const [isValidFullName, setIsValidFullName] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isVaidlEmail, setIsValidEmail] = useState<boolean>(true);

  const handleSubmit = (event: any) => {
    if(fullName && fullName.trim().length === 0) {
      setIsValidFullName(false);
    } else setIsValidFullName(true);
  };

  const validateEmail = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    if (value && value.length > 0) {
      const isValid = validateEmail(value);
      setIsValidEmail(isValid);
    }
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.validity.valid) setPhone(value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFullName(value);
  };

  return (
    <>
      <div className="">
        {/* <form action="#" method="POST" onSubmit={handleSubmit}> */}
        {/* <form action="#" onSubmit={handleSubmit}> */}
        <div>
          <div className="">
            <div className="py-8">
              <div className="grid grid-cols-12 md:grid-cols-6 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Nombres completos"
                    value={fullName ? fullName : ""}
                    className={`${
                      !isValidFullName
                        ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-500"
                        : "border-gray-300 focus:border-purple-800 focus:ring-purple-800"
                    } mt-1 block w-full rounded-md shadow-sm sm:text-sm`}
                    onChange={(event) => handleName(event)}
                  />
                </div>

                <div className="md:col-span-6 col-span-12 flex flex-col gap-2 -mt-2">
                  <div className="relative">
                    <div className="flex items-center">
                      <span
                        className={`${
                          phone?.length === 0
                            ? "text-red-500"
                            : "text-slate-500"
                        } absolute left-3 text-[14px] mt-1`}
                      >
                        (+569)
                      </span>
                      <input
                        type="text"
                        name="phone"
                        pattern="[0-9]*"
                        placeholder="Celular"
                        maxLength={8}
                        id="phone"
                        value={phone ? phone : ""}
                        className={`${
                          phone?.length === 0
                            ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-500"
                            : "focus:border-purple-800 focus:ring-purple-800 border-gray-300"
                        } mt-1 block w-full rounded-md shadow-sm text-sm indent-12`}
                        onChange={(event) => handlePhone(event)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 -mt-2">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={email ? email : ""}
                    placeholder="Email"
                    className={`${
                      email?.length === 0 || !isVaidlEmail
                        ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-500"
                        : "focus:border-purple-800 focus:ring-purple-800 border-gray-300"
                    } mt-1 block w-full rounded-md shadow-sm sm:text-sm`}
                    onChange={(event) => handleEmail(event)}
                  />

                  {/* {email?.length === 0 && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">Email Requerido</span>
                      </p>
                    )}
                    {email && email?.length > 0 && !isVaidlEmail && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">
                          Ingresar email válido
                        </span>
                      </p>
                    )} */}
                </div>

                <div className="col-span-12 md:col-span-6 -mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    value={password ? password : ""}
                    className={`${
                      password?.length === 0 ||
                      (password && password?.length > 0 && password?.length < 6)
                        ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-500"
                        : "focus:border-purple-800 focus:ring-purple-800 border-gray-300"
                    } mt-1 block w-full rounded-md shadow-sm sm:text-sm`}
                    onChange={(event) => handlePassword(event)}
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-300"> */}
            <div className="flex justify-center">
              {/* <button
                    type="submit"
                    disabled={disableButton}
                    className={`${
                      disableButton ? "cursor-not-allowed" : "cursor-pointer"
                    } bg-[#5f2698]  w-full inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                    `}
                  >
                    <span className="">
                      Crear cuenta
                    </span>
                  </button> */}

              <Button
                type="primary"
                description="Crear cuenta"
                className="w-full h-[36px] px-8 rounded-md text-white text-sm font-semibold flex justify-center items-center"
                icon={true}
                iconPosition="right"
                handleClick={handleSubmit}
              />
              {/* <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Choose plan
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button> */}
            </div>
          </div>
          {/* </form> */}
        </div>
        <div className="mt-8 flex text-center">
          <span className="text-xs text-slate-400">
            Al crear la cuenta, acepta los{" "}
            <Link
              href=""
              className="underline decoration-slate-500 hover:decoration-indigo-700 text-slate-500 hover:text-indigo-700"
            >
              Términos y Condiciones del Servicio
            </Link>{" "}
            y nuestra{" "}
            <Link
              href=""
              className="underline decoration-slate-500 text-slate-500 hover:decoration-indigo-700 hover:text-indigo-700"
            >
              Política de Privacidad de Datos
            </Link>
          </span>
        </div>
      </div>

      <div className="md:hidden block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};
