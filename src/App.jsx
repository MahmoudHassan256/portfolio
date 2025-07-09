import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MissingPage from "./pages/MissingPage";
import LayoutPage from "./pages/LayoutPage";
import { ThemeProvider } from "next-themes";
function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage>
                <HomePage />
              </LayoutPage>
            }
          />

          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
