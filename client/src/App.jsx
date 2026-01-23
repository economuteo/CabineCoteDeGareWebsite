import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, Home, Pricing } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <Error />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
