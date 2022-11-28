import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  window.onload=(alert('TEST'))
  // window.ontimeupdate(alert('HMMM'))
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
