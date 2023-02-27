"use client"
import { Modal } from "components/ui/modal";
import { useState } from "react";
import { Header } from "../header/index";

export const Layout = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
