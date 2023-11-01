"use client";
import React, { useState } from "react";
import CustomModal from "@/components/CustomModal";

export default function Subscription() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(" Plan");

  const openModal = (e: any) => {
    setIsModalOpen(true);
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => openModal(e)}
        value="Custom Plan"
      >
        Get Started
      </button>
      <CustomModal isOpen={isModalOpen} closeModal={closeModal} title={title} />
    </div>
  );
}
