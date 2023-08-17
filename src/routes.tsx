import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        
        children: [
            { path: "", element: <Homepage/> },
            { path: "games/:id", element: <GameDetailPage /> },
        ]
    },
]);

export default router;