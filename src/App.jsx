import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Teachers from "./components/Teachers/Teachers";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import ModalContent from "./components/ModalContent/ModalContent";

function App() {
  const [modalStatus, setModalStatus] = useState(false)


  const handleCloseModal = () => {
    setModalStatus(false)
  }

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
