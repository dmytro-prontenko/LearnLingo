import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Teachers from "./components/Teachers/Teachers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
