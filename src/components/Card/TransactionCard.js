import React from "react";

const TransactionCard = ({ selectedOption, onSelectChange }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">Transactions</h2>
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

    <div className="table"></div>
  </div>
);

export default TransactionCard;
