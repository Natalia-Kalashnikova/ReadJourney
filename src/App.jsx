import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";


export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
