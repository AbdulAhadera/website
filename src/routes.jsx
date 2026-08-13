// import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import App from "./App";
// import {HomePage} from ""

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export { Router };
