import cl from "./SideBar.module.scss";
import  {ProfileCard}  from "@/entities/profileCard";

export function Sidebar() {
  return (
    <div className={cl["sidenav"]}>
      <ProfileCard />
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}