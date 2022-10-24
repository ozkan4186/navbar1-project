import React from "react";
import {  Outlet, useNavigate } from "react-router-dom";

const Random = () => {

  const navigate=useNavigate()
  return (
    <div className="random">
   
      🎁💥WELCOM TO MY PAGE🛩🍃
      <div className="button">
        <button
          className="btn btn-danger w-50"
          onClick={() => navigate("") }
        >
          anka kuşu
        </button>
        <button
          className="btn btn-info w-50"
          onClick={() => navigate("tarik")}
        >
          Blue Anka
        </button>
      </div>
         <Outlet />
    </div>
  );
};

export default Random;
