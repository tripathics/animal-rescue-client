import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import RootLayout from "./component/layouts/rootlayout";
import Home from "./pages/home";
import Login from './pages/login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "/login", element: <Login /> },
          { path: "*", element: <h1>Not Found</h1> },
        ],
      },
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     { path: "login", element: <Login /> },
      //     { path: "register", element: <Register /> },
      //     { path: "reset-password", element: <ResetPassword /> },
      //   ],
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          theme="dark"
          transition={Slide}
        />
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
