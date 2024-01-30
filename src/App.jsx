import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";
import Teachers from "./components/Teachers/Teachers";
import { ModalContext } from "./context/ModalContext";
import { useContext } from "react";

function App() {
  const { modalStatus, setModalStatus} = useContext(ModalContext);

  const handleCloseModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<Teachers />} />
        </Route>
      </Routes>

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>
    </>
  );
}

export default App;
