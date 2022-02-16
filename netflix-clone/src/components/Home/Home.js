import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";
function Home() {
  const [data, setData] = useState([]);

  const getTrending = async () => {
    return await axios
      .get("https://moviesraneem.herokuapp.com/trending")
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    void (async () => {
      let data= await getTrending();
      setData(data);
    })();
  }, []);

  return (
   < MovieList data={data}/>
  );
}
export default Home;