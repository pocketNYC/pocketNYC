import React from "react";
import BottomNav from "../features/navbar/BottomNav";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {

  return (
    <div>
      <Navbar />
      <AppRoutes />
      <BottomNav />
    </div>
  );
};

export default App;
