import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const Accueil = lazy(() => import("../components/Accueil"));

const Experience = lazy(() => import("../components/experience"));

const Competence = lazy(() => import("../components/competence"));

const Contact = lazy(() => import("../components/contact"));

const Router = () => {
  return (
    <div>
    {/* <Routes>
      <Route
        path="/"
        element={<Accueil />}
      />
    </Routes> */}
    <Accueil />
    </div>
  );
};

export default Router;