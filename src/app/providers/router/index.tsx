import { MainLayout } from "@/widgets/layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "@/pages/home";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                Component: HomePage, 
            },
        ],
    }
]);


export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
}