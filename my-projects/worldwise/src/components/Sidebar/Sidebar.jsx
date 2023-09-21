import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
