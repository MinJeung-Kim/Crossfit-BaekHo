import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SideNavigationBar from "./components/SideNavigationBar/SideNavigationBar";
import styles from "./App.module.css";
import LoginForm from "./pages/LoginForm/LoginForm";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { userInfo } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  return (
    <main className={styles.root}>
      {userInfo.email ==='' ? (
        <LoginForm />
      ) : (
        <>
          <SideNavigationBar isActive={isActive} />
          <section className={styles.container}>
            <SearchHeader isActive={isActive} setIsActive={setIsActive} />
            <Outlet />
          </section>
        </>
      )}
    </main>
  );
}

export default App;
