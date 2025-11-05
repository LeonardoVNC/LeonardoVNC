import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/home/HomePage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ProjectDetailPage from "../pages/projects/ProjectDetailPage";

export const mainRoute = "/LeonardoVNC"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Outlet />}>
                    <Route path={mainRoute} element={<AppLayout />}>
                        <Route path="" element={<HomePage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="projects/:id" element={<ProjectDetailPage />} />

                        <Route path="*" element={<Navigate to={mainRoute} replace />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}