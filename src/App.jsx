import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/theme";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
