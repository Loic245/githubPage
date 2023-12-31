import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const Accueil = lazy(() => import("../components/Accueil"));

const Experience = lazy(() => import("../components/experience"));

const Competence = lazy(() => import("../components/competence"));

const Contact = lazy(() => import("../components/contact"));

const Routers = () => {
  return (
      <Routes>
        <Route
          path="/githubPage"
          element={ 
            <Suspense fallback={<Spinner />}>
              <Layout>
                <Accueil />
              </Layout>
            </Suspense>
          }
        /> 

        <Route
          path="/githubPage/experience"
          element={
            <Suspense fallback={<Spinner />}>
              <Layout>
                <Experience />
              </Layout>
            </Suspense>
          }
        /> 

        <Route
          path="/githubPage/competence"
          element={
            <Suspense fallback={<Spinner />}>
              <Layout>
                <Competence />
              </Layout>
            </Suspense>
          }
        />

        <Route
          path="/githubPage/contact"
          element={
            <Suspense fallback={<Spinner />}>
              <Layout>
                <Contact />
              </Layout>
            </Suspense>
          }
        /> 
      </Routes>
  );
};

export default Routers;