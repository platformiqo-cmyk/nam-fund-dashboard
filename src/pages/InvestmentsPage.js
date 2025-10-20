// src/pages/InvestmentsPage.js
import React, { useState } from "react";
import InvestmentsTable from "../components/InvestmentsTable";
import investments from "../data/investments";

export default function InvestmentsPage() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Lọc dữ liệu theo tên + loại
  const filteredInvestments = investments.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  // Lấy danh sách loại đầu tư duy nhất (Equity, Real Estate, v.v.)
  const types = ["all", ...new Set(investments.map((i) => i.type))];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Investments</h1>

      {/* Thanh tìm kiếm + bộ lọc */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type === "all" ? "Tất cả loại hình" : type}
            </option>
          ))}
        </select>
      </div>

      {/* Bảng đầu tư */}
      <InvestmentsTable rows={filteredInvestments} />
    </div>
  );
}
