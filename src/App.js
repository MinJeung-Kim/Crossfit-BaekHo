import { useState } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SideNavigationBar from "./components/SideNavigationBar/SideNavigationBar";
import styles from "./App.module.css";
import LoginForm from "./pages/LoginForm/LoginForm";

const queryClient = new QueryClient();

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <main className={styles.root}>
      <LoginForm />
      <SideNavigationBar isActive={isActive} />
      <section className={styles.container}>
        <SearchHeader isActive={isActive} setIsActive={setIsActive} />
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </section>
    </main>
  );
}

export default App;
