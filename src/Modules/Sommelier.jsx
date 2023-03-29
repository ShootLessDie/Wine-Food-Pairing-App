import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Container from "@mui/material/Container";
import wines from "../wines.json";
import "./Sommelier.css";
import { Autocomplete, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { TypeAnimation } from "react-type-animation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import wineBread from "../assets/animated-icons/wine-bread.gif";
import wineGlass from "../assets/animated-icons/wineGlass.gif";
import Box from "@mui/material/Box";
import bottle from "../assets/images/bottle.jpg"

// const Sommelier = () => {

const queryClient = new QueryClient();

const baseURL = "https://api.spoonacular.com";
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

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
  const [searchItem, setSearchItem] = useState("");

  let wineArray = [];

  wines.wines.map((value, index) =>
    wineArray.push({ label: value.replaceAll("_", " ") })
  );

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
        `${baseURL}/food/wine/recommendation?wine=${wineForRecommendation || wine
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
  const onFormSubmit = () => {
    setWine(searchItem);
    setWineForRecommendation(null);
  };
  // infer if the type is either wine or food
  useEffect(() => {
    if (!wine) return;

    let formated_wine = wine.toLowerCase().replaceAll(" ", "_");
    setType(wines.wines.indexOf(formated_wine) !== -1 ? "wine" : "food");
  }, [wine, setType]);
  // if it's wine than set the wine recommendation to the clicked wine
  const onWineClick = (e) => {
    setWineForRecommendation(e.target.innerText);
  };

  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "rgb(138, 18, 84)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80%",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      className="menuContainer"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            className="chalk-button"
            variant="outlined"
            size="large"
            color="error"
            sx={{ marginTop: "2em" }}
          >
            <ArrowBackIcon sx={{ fontSize: "large" }} /> Back
          </Button>
        </Link>

        <TypeAnimation
          className="type-animation"
          sequence={[
            // Same String at the start will only be typed once, initially
            "I would like some...",
            1000,
            "I would like some steak",
            1000,
            "I would like some tortillas",
            1000,
            "I would like some ... hmmm",
            1500,
            "I would like some nachos",
            1000,
            "I would like a burger",
            1000,
            "I would like some pizza",
            1500,
          ]}
          wrapper="h1"
          speed={50}
          //   style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        <h3 className="search-below">
          Search below for the best food and wine pairings!<span></span>
          <img className="wineBread" src={wineBread} alt="Wine Bread" />
        </h3>
        <br />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={wineGlass} alt="wine glass" className="wine-glass" />
          <Autocomplete
            // disablePortal
            className="search-input"
            freeSolo
            id="combo-box-demo"
            options={wineArray}
            sx={{ width: 300 }}
            value={searchItem}
            onChange={(event, newValue) => {
              setSearchItem(newValue.label);
            }}
            inputValue={searchItem}
            onInputChange={(event, newInputValue) => {
              setSearchItem(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Food or Wine" />
            )}
          />
        </Box>

        <br />
        <Button
          variant="contained"
          size="large"
          className="chalk-button"
          onClick={() => onFormSubmit()}
          color="error"
          sx={{ backgroundColor: "#ad0707" }}
        >
          Search
        </Button>

        <section className="results-container">
          {!!pairings?.pairings?.length && (
            <aside className="pairings-container">
              <h1 className="menu">Menu</h1>
              <h2>Pairs best with . . .</h2>
              {type === "food" && (
                <ul>
                  {pairings?.pairings?.map((value, index) => (
                    <ul key={index}>
                      <Button className="chalk-button" onClick={(e) => onWineClick(e)}>{value}</Button>
                    </ul>
                  ))}
                </ul>
              )}
              {type === "wine" && (
                <ul>
                  {pairings?.pairings?.map((value, index) => (
                    <ul key={index}>{value}</ul>
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
                    <div class="wine-container">
                    <img class="bottle" src={bottle} alt="" />
                    <img class="wine" src={wine.imageUrl} alt={wine.title} />
                    </div>
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
      </Container>
    </main>
  );
}

export default Sommelier;
