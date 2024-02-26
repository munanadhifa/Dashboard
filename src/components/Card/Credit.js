/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Credit = () => {
  return (
    <div className="w-auto h-56 mt-3 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
      <div className="w-full px-8 absolute top-2">
        <div style={{ textAlign: "-webkit-right" }}>
          <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
        </div>
        <div className="pt-5">
          <p className="font-medium text-center tracking-widest">
            4642 3489 9867 7632
          </p>
        </div>
        <div className="pt-3">
          <p className="font-medium tracking-widest">Olivia Rodrigo</p>
        </div>
        <div className="pt-5 pr-6">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light text-xs">Valid</p>
              <p className="font-medium tracking-wider text-sm">11/15</p>
            </div>
            <div className="">
              <p className="font-light text-xs">Expiry</p>
              <p className="font-medium tracking-wider text-sm">03/25</p>
            </div>

            <div className="">
              <p className="font-light text-xs">CVV</p>
              <p className="font-bold tracking-more-wider text-sm">···</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
