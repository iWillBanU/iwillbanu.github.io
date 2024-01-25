import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Index from "./routes";
import Socials from "./routes/socials";
import Projects from "./routes/projects";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children: [{
        path: "/",
        element: <Index />
    }, {
        path: "/projects",
        element: <Projects />
    }, {
        path: "/socials",
        element: <Socials />
    }]
}]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)