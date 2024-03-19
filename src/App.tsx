import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFount";
import { Login } from "./Pages/Register/Login";
import { SignUp } from "./Pages/Register/SignUp";

import { PrivateRoute } from "./services/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import Verify from "./Pages/Register/Verify";
import Welcome from "./Pages/Welcome";
import { Landing } from "./Pages/Landing/Landing";
import { ClueOne } from "./Pages/Clues/ClueOne";
import { Fake } from "./Pages/Fake/Fake";
import { ClueTwo } from "./Pages/Clues/ClueTwo";
import { ClueThree } from "./Pages/Clues/ClueThree";
import { ClueFour } from "./Pages/Clues/ClueFour";
import { ClueFive } from "./Pages/Clues/ClueFive";
import { ClueSix } from "./Pages/Clues/ClueSix";
import { SuccessPage } from "./Pages/Clues/SuccessPage";

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
            path: "/landing",
            element: <Landing />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/verify",
            element: <Verify />,
        },
        {
            path: "/welcome",
            element: <Welcome />,
        },

        {
            path: "/",
            element: <PrivateRoute />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/2563",
                    element: <Fake />,
                },
                {
                    path: "/25638",
                    element: <ClueOne />,
                },
                {
                    path: "/45856",
                    element: <ClueTwo />,
                },

                {
                    path: "/22258963",
                    element: <ClueThree />,
                },
                {
                    path: "/1012578",
                    element: <ClueFour />,
                },
                {
                    path: "/30125789653",
                    element: <ClueFive />,
                },
                {
                    path: "/253",
                    element: <ClueSix />,
                },
                {
                    path: "/sucessreached",
                    element: <SuccessPage />,
                },
            ],
        },
    ]);
    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 5000,
                }}
            />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
