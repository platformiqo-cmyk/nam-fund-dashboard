// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ReportsPage from "./pages/ReportsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout chính */}
        <Route path="/" element={<MainLayout />}>
          {/* Các trang con */}
          <Route index element={<DashboardPage />} />
          <Route path="investments" element={<InvestmentsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
