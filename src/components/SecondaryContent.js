import React from "react";
import Credit from "../components/Card/Credit";

const SecondaryContent = () => {
  return (
    <div className="Container">
      <div className="flex ">
        <h1 className="text-2xl font-bold">Account</h1>
        <div className="flex flex-1 justify-end px-2 lg:ml-6 ">
          <img
            className="inline-block h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-lg font-bold">My Cards</h1>
        <Credit />
      </div>
    </div>
  );
};

export default SecondaryContent;
