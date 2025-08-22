import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";
import s from "./MainLayout.module.scss";

export function MainLayout() {
  return (
    <div>
      <Sidebar />
      <main className={s["content"]}>
        <Outlet/>
      </main>
    </div>
    );
}