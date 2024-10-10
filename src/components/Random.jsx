import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import { useGif } from "../hooks/useGif";

const Random = () => {
  // const API_KEY = process.env.GIPHY_API_KEY;
  const { loading, gif, fetchData } = useGif();

  const clickHandler = () => {
    fetchData();
  };
  return (
    <div className="w-[1/2] bg-green-500 rounded-lg border border-black flex flex-col items-center justify-between gap-y-5 mt-[15px] px-3">
      <h1 className="text-2xl uppercase underline font-bold">Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width={350} />}
      <button
        className="w-[10/12] bg-yellow-500 text-lg py-2 rounded-lg px-5 mb-3"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
