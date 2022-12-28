import React from "react";
import Accountinformation from "pages/Accountinformation";
import AccountinformationThree from "pages/AccountinformationThree";
import AccountinformationOne from "pages/AccountinformationOne";
import AccountinformationTwo from "pages/AccountinformationTwo";
import Error from "pages/Error";
import ContanctUs from "pages/ContanctUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contanctus" element={<ContanctUs />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="/accountinformationtwo"
          element={<AccountinformationTwo />}
        />
        <Route
          path="/accountinformationone"
          element={<AccountinformationOne />}
        />
        <Route
          path="/accountinformationthree"
          element={<AccountinformationThree />}
        />
        <Route path="/accountinformation" element={<Accountinformation />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
