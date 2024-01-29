import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Login from "../Forms/Login/Login";
import Registration from "../Forms/Registration/Registration";

const ModalContent = () => {
  const { modalContent } = useContext(ModalContext);

  switch (modalContent) {
    case "login":
      return <Login />;
    case "register":
      return <Registration />;
    default:
      return null;
  }
};

export default ModalContent;
