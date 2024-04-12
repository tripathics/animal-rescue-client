import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/user";
import RootLayout from "./components/layouts/root";
import AuthLayout from "./components/layouts/auth";
import PrivateRoutes from "./components/routing/PrivateRoutes/PrivateRoutes";
import Organisation from "./views/organisation/organisation";
import OrganisationGrid from "./views/organisation/OrganisationGrid";
import { Home, About, Login, Register } from "./views";
import Profile, {
  Education,
  Experience,
  PersonalProfile,
} from "./views/profile";
import Admin, { Applications, Users } from "./views/admin";
import Alumni from "./views/alumni";
import ResetPassword from "./views/reset-password/page";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "about", element: <About /> },
          {
            element: <PrivateRoutes />,
            children: [
              {
                path: "profile",
                element: <Profile />,
                children: [
                  { path: "", element: <PersonalProfile /> },
                  { path: "education", element: <Education /> },
                  { path: "experience", element: <Experience /> },
                  { path: "account", element: <h1>TODO: Account</h1> },
                ],
              },
              {
                path: "alumni-membership",
                element: <Alumni />
              },
            ],
          },
          { 
            children :[
              {
                path: "organisation", 
                element : <Organisation />,
                children: [
                  { path: "list", element: <OrganisationGrid /> },
                  { path: "add", element: <h1>TODO: Add Organisation</h1> },
                  { path: "edit", element: <h1>TODO: Edit Organisation</h1> },
                ]
              }
            ]
          },
          {
            path:"orglist",
            element: <OrganisationGrid />
          },

          {
            element: <PrivateRoutes adminRoute />,
            children: [
              {
                path: "admin",
                element: <Admin />,
                children: [
                  { path: "", element: <h1>TODO: Dashboard</h1> },
                  { path: "applications", element: <Applications /> },
                  { path: "users", element: <Users /> },
                ],
              },
            ],
          },
          { path: "*", element: <h1>Not Found</h1> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "reset-password", element: <ResetPassword /> },
        ],
      },
    ],
  },
]);

const App = () => {
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
};

export default App;
