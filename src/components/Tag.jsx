import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import { useGif } from "../hooks/useGif";

const Tag = () => {
  // const API_KEY = process.env.GIPHY_API_KEY;
  const API_KEY = "j4VKdvY71Qe0jt9REo7ycSWMpJ0IfHWX";
  console.log(API_KEY);

  const [tag, setTag] = useState("cat");

  const { loading, fetchData, gif } = useGif(tag);

  const clickHandler = () => {
    fetchData();
  };
  return (
    <div className="w-[1/2] bg-blue-500 rounded-lg border border-black flex flex-col items-center justify-between gap-y-5 mt-[15px] px-3">
      <h1 className="text-2xl uppercase underline font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width={350} />}
      <input
        type="text"
        name="tag"
        value={tag}
        className="w-11/12 text-center text-lg py-2 rounded-lg px-5 mb-3 border border-gray-600 outline-none"
        onChange={(e) => setTag(e.target.value)}
      />
      <button
        className="w-[10/12] bg-yellow-500 text-lg py-2 rounded-lg px-5 mb-3"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
