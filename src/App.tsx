import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Signup } from "./Pages/Registration/Signup";
import { Login } from "./Pages/Registration/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Matches } from "./Pages/Matches/Matches";
import { Message } from "./Pages/Message/Message";
import { Profile } from "./Pages/GuestPage/Profile";
import { GuestPage } from "./Pages/GuestPage/GuestPage";
import { MatchFound } from "./Pages/Matches/MatchFound";
import Verify from "./Pages/Registration/pages/Verify";
import Details from "./Pages/Registration/pages/Details";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./services/PrivateRoute";

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/404",
            element: <NotFound />,
        },
        {
            path: "/verify",
            element: <Verify />,
        },
        {
            path: "/details",
            element: <Details />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/",
            element: <PrivateRoute />,
            children: [
                {
                    path: "/",
					element: <Dashboard />,
                },
                {
					path: "/profile",
					element: <Profile />,
                },
                // {
                //     path: "/",
                //     element: <RoleChecker allowedRoles={[Roles.ADMIN]} />,
                //     children: [
                //         {
                //             path: "/payment-status",
                //             element: <Admin />,
                //         },
                //         {
                //             path: "/payment-status/:id",
                //             element: <PaymentStatus />,
                //         },
                //     ],
                // },
            ],
        },

        {
            path: "/match",
            element: <Matches />,
        },
        {
            path: "/message",
            element: <Message />,
        },
        {
            path: "/guestpage",
            element: <GuestPage />,
        },
        {
            path: "/matchfound",
            element: <MatchFound />,
        },
    ]);
    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />
            <RouterProvider router={router} />;
        </>
    );
}

export default App;
