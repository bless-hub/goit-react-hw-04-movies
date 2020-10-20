import axios from "axios";
//https://api.themoviedb.org/3/movie//movie/500?api_key=4a5a4acc0f818a67345c734dc207f1dd
// https://api.themoviedb.org/3/trending/movie/week?api_key=4a5a4acc0f818a67345c734dc207f1dd

const url = "https://api.themoviedb.org/3";
const keyApi = "4a5a4acc0f818a67345c734dc207f1dd";

export const popularMovie = () =>
  axios.get(`${url}/trending/movie/week?api_key=${keyApi}`);

export const searchInfo = (id) =>
  axios.get(`${url}/movie/${id}?api_key=${keyApi}`);

export const searchMovie = (query = "batman") =>
  axios.get(
    `${url}/search/movie?api_key=${keyApi}&language=en-US&page=1&include_adult=false&query=${query}`
  );
