import { useState, useEffect } from "react";
import axios from "axios";
// import env from "react-native-dotenv";
import { RAPID_API_KEY } from "@env";

const rapidapikey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidapikey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
};
