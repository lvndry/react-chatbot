import axios from "axios";

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
