import cl from "./SideBar.module.scss";

export function Sidebar() {
  return (
    <div className={cl["sidenav"]}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}