const url = "https://api.themoviedb.org";
const keyApi = "4a5a4acc0f818a67345c734dc207f1dd";

const fetchMain = (searchQuery) => {
  return fetch(
    `${url} 3/trending/get-trending/${searchQuery}?api_key${keyApi}`
  ).then((res) => console.log(res.json()));
};

export default fetchMain;
