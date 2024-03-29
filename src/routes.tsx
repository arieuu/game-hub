import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        
        children: [
            { path: "", element: <Homepage/> },
            { path: "games/:slug", element: <GameDetailPage /> },
        ]
    },
]);

export default router;