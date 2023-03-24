import React, { useState, useEffect, useCallback } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import wines from "../wines.json";


// const Sommelier = () => {


const queryClient = new QueryClient();

const baseURL = "https://api.spoonacular.com";
// const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const apiKey = "0bbbab3c5eaa41a69f2609a688be4d0a"
// console.log(apiKey)
// the begining of composition
function Sommelier() {
  return (
    <QueryClientProvider client={queryClient}>
      <Body />
    </QueryClientProvider>
  );
}
// renders search bar, recommended wines and pairings
function Body() {
  const [wine, setWine] = useState();
  const [type, setType] = useState("wine");
  const [wineForRecommendation, setWineForRecommendation] = useState();

  // defines end point that we are going to use
  const { data: pairings } = useQuery(
    ["dishPairingForWine", baseURL, apiKey, wine],
    async () => {
      return fetch(
        `${baseURL}/food/wine/dishes?wine=${wine}&apiKey=${apiKey}`
      ).then((res) => res.json());
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!wine,
    }
  );

  const { data: recommendations } = useQuery(
    ["wineRecommendations", baseURL, apiKey, wine, wineForRecommendation],
    async () => {
      return fetch(
        `${baseURL}/food/wine/recommendation?wine=${
          wineForRecommendation || wine
        }&number=2&apiKey=${apiKey}`
      ).then((res) => res.json());
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!wineForRecommendation || !!wine,
    }
  );
  // call back function that executes when the form is submitted
  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setWine(e.target.wine.value);
      setWineForRecommendation(null);
    },
    [setWine]
  );
  // infer if the type is either wine or food
  useEffect(() => {
    if (!wine) return;

    let formated_wine = wine.toLowerCase().replaceAll(" ", "_");
    setType(wines.wines.indexOf(formated_wine) !== -1 ? "wine" : "food");
  }, [wine, setType]);
  // if it's wine than set the wine recommendation to the clicked wine
  const onWineClick = useCallback((e) => {
    e.preventDefault();
    setWineForRecommendation(e.target.innerText);
  }, []);

  return (
    <main>
      <form className="search-form" onSubmit={onFormSubmit}>
        <datalist id="wineSearchDataList">
          {wines.wines.map((value, index) => (
            <option key={index}>{value.replaceAll("_", " ")}</option>
          ))}
        </datalist>
        <input
          type="text"
          list="wineSearchDataList"
          className="search-input"
          placeholder="Food or wine"
          name="wine"
        />
        <input type="submit" value="Search" />
      </form>
      <section className="results-container">
        {!!pairings?.pairings?.length && (
          <aside className="pairings-container">
            <h2>Pairs best with</h2>
            {type === "food" && (
              <ul>
                {pairings?.pairings?.map((value, index) => (
                  <li key={index}>
                    <button onClick={onWineClick}>{value}</button>
                  </li>
                ))}
              </ul>
            )}
            {type === "wine" && (
              <ul>
                {pairings?.pairings?.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            )}
          </aside>
        )}
        {!!recommendations?.recommendedWines?.length && (
          <div className="recommendations-container">
            <h2>Wine Recommendations</h2>
            <ul>
              {recommendations?.recommendedWines?.map((wine, index) => (
                <li key={index}>
                  <h3>{wine.title}</h3>
                  <img src={wine.imageUrl} alt={wine.title} />
                  <span className="wine-recommendations-price">
                    {wine.price}
                  </span>
                  <p>{wine.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}

export default Sommelier