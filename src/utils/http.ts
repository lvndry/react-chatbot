import axios from "axios";

import * as mathUtils from "./math";

axios.defaults.headers["Accept"] = "application/json";

export const getDadJoke: () => Promise<string> = async () => {
  const endpoint = "https://icanhazdadjoke.com";
  const { data } = await axios.get(endpoint);
  return data.joke;
};

export const getQuote: () => Promise<string> = async () => {
  const endpoint =
    "http://quotes.rest/qod.json?language=en&limit=1&category=inspire";
  const { data } = await axios.get(endpoint);
  return data.contents.quotes[0].quote;
};

export const getChuckJoke: () => Promise<string> = async () => {
  const endpoint = "https://api.chucknorris.io/jokes/random";
  const { data } = await axios.get(endpoint);
  return data.value;
};

export const getHeadline: () => Promise<string> = async () => {
  const apikey = process.env.NEWS_API_KEY;
  const endpoint = `https://newsapi.org/v2/top-headlines?country=fr&apikey=${apikey}`;

  const { data } = await axios.get(endpoint);
  const { articles }: { articles: { title: string }[] } = data;
  return articles[Math.floor(Math.random() * articles.length)].title;
};

export const getSource: () => Promise<string> = async () => {
  const apikey = process.env.NEWS_API_KEY;
  const endpoint = `https://newsapi.org/v2/sources?country=fr&apikey=${apikey}`;

  const { data } = await axios.get(endpoint);
  const { sources }: { sources: { name: string }[] } = data;
  return sources[Math.floor(Math.random() * sources.length)].name;
};

export const getCat: () => Promise<string> = async () => {
  const endpoint = "https://api.thecatapi.com/v1/images/search?size=small";
  const headers = {
    "x-api-key": process.env.CAT_API_KEY,
  };

  const { data } = await axios.get(endpoint, { headers });
  return data[0].url;
};

export const getDog: () => Promise<string> = async () => {
  const endpoint = "https://dog.ceo/api/breeds/image/random";

  const { data } = await axios.get(endpoint);

  return data.message;
};

export const getArt: () => Promise<string> = async () => {
  let src = "";

  while (src === "") {
    const index = mathUtils.getRandomInRange(1, 470000);
    const endpoint = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`;

    try {
      const { data } = await axios.get(endpoint);
      src = data.primaryImageSmall;
    } catch (err) {
      src = "";
    }
  }

  return src;
};
