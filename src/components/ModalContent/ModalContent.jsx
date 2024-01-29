import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const ModalContent = () => {
  const {modalContent} = useContext(ModalContext)

  switch (modalContent) {
    case "login":
      return <div>Log In</div>;
    case "register":
      return <div>Register</div>;
    default:
      return null;
  }
};


export default ModalContent
