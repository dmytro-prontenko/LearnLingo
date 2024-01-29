import { createContext, useState } from "react";
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const value = {
    modalStatus,
    setModalStatus,
    modalContent,
    setModalContent,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
