import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, Home, Pricing } from "./pages";
import ProphylacticTreatments from "./pages/specialties/ProphylacticTreatments";
import DentalEmergencies from "./pages/specialties/DentalEmergencies";
import Veneers from "./pages/specialties/Veneers";
import TeethWhitening from "./pages/specialties/TeethWhitening";
import DentalImplants from "./pages/specialties/DentalImplants";
import DentalHygiene from "./pages/specialties/DentalHygiene";
import SmileMakeover from "./pages/specialties/SmileMakeover";
import Endodontics from "./pages/specialties/Endodontics";
import FixedRemovableDentures from "./pages/specialties/FixedRemovableDentures";
import SureSmile from "./pages/specialties/SureSmile";
import DentalTreatmentRates from "./pages/specialties/DentalTreatmentRates";

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
            {
                path: "/prophylactic-treatments",
                element: <ProphylacticTreatments />,
            },
            {
                path: "/dental-emergencies",
                element: <DentalEmergencies />,
            },
            {
                path: "/veneers",
                element: <Veneers />,
            },
            {
                path: "/teeth-whitening-and-brightening",
                element: <TeethWhitening />,
            },
            {
                path: "/dental-implants",
                element: <DentalImplants />,
            },
            {
                path: "/dental-hygiene",
                element: <DentalHygiene />,
            },
            {
                path: "/smile-makeover",
                element: <SmileMakeover />,
            },
            {
                path: "/endodontics",
                element: <Endodontics />,
            },
            {
                path: "/fixed-removable-dentures",
                element: <FixedRemovableDentures />,
            },
            {
                path: "/sure-smile",
                element: <SureSmile />,
            },
            {
                path: "/dental-treatment-rates",
                element: <DentalTreatmentRates />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
