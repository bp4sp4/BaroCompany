"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ConsultationContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error("useConsultation must be used within a ConsultationProvider");
  }
  return context;
}
