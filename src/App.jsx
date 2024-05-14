import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AppLayout } from "./layout/app-layout";
import appRouter from "./routes/app-router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          {appRouter.map(({ component, id, path }) => (
            <Route
              path={path}
              element={component}
              key={id}
              index={path ? false : true}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
