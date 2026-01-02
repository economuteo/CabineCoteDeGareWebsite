import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, Home } from "./pages";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
