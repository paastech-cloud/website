import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}></Route>
    </Route>
  )
);
export default Router;
