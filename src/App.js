import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//imported innovaccer design system css so that it can be applied globally
import "@innovaccer/design-system/css";

import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
