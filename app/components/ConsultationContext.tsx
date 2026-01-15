"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationContextType {
  openModal: () => void;
  closeModal: () => void;
  showSuccessModal: boolean;
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(
  undefined
);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSuccessModal = () => setShowSuccessModal(true);
  const closeSuccessModal = () => setShowSuccessModal(false);

  return (
    <ConsultationContext.Provider
      value={{
        openModal,
        closeModal,
        showSuccessModal,
        openSuccessModal,
        closeSuccessModal,
      }}
    >
      {children}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error(
      "useConsultation must be used within a ConsultationProvider"
    );
  }
  return context;
}
