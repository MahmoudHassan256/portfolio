import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MissingPage from "./pages/MissingPage";
import LayoutPage from "./pages/LayoutPage";
function App() {
  return (
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
  );
}

export default App;
