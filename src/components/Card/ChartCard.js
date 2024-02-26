import React from "react";

const ChartCard = ({ title, selectedOption, onSelectChange, children }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div>
        <select
          value={selectedOption}
          onChange={onSelectChange}
          className="border rounded-md px-2 py-1"
        >
          <option value="option1">Monthly</option>
          <option value="option2">Daily</option>
          <option value="option2">Weekly</option>
        </select>
      </div>
    </div>
    {children}
    <div className="grid grid-cols-3">
      <div>
        <p className="truncate text-md font-medium text-gray-500">Daily</p>
        <p className="mt-1 font-semibold tracking-tight text-gray-800">
          $250.25
        </p>
      </div>

      <div>
        <p className="truncate text-md font-medium text-gray-500">Weekly</p>
        <p className="mt-1  font-semibold tracking-tight text-gray-800">
          $900.00
        </p>
      </div>

      <div>
        <p className="truncate text-md font-medium text-gray-500">Monthly</p>
        <p className="mt-1  font-semibold tracking-tight text-gray-800">
          $22,150
        </p>
      </div>
    </div>
  </div>
);

export default ChartCard;
