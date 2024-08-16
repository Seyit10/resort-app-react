import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/DetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/search/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />

      <Route 
        path="/detail/:resortId" 
        element={
          <Layout>
            <DetailPage />
          </Layout>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
