import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Tmdb from "./Tmdb";

import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadALL = async () => {
      // pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChoseMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChoseMovie];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadALL();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY >= 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="Page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por <span role>🤠</span> Yan Cardoso
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img src="netflix_virus_loading.gif" alt="Carregando" />
        </div>
      )}
    </div>
  );
}

export default App;
