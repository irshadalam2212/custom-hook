import axios from "axios";
import { useEffect, useState } from "react";

export const useGif = (tag) => {
  //CREATE YOUR OWN API KEY
  const API_KEY = process.env.GIPHY_API_KEY;
  console.log(API_KEY);

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      console.log(data);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.log("Error while fetching API", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};
