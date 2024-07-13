import { createBrowserRouter } from 'react-router-dom'

// Public Layout
import PublicLayout from "./app/pages/PublicLayout";
import SignIn from "./app/pages/SignIn";

// Private Layout
import RootLayout from "./app/pages/private/RootLayout";
import Home from "./app/pages/private/Home";

export const Routers = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />
            }
        ]
    },
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);