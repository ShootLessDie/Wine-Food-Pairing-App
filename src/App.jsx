// import React, { useState, useEffect, useCallback } from "react";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
// import "./App.css";
// import wines from "./wines.json";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import LandingPage from "./Modules/LandingPage";

// const queryClient = new QueryClient();

// const baseURL = "https://api.spoonacular.com";
// const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
// // the begining of composition
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Body />
//     </QueryClientProvider>
//   );
// }
// // renders search bar, recommended wines and pairings
// function Body() {
//   const [wine, setWine] = useState();
//   const [type, setType] = useState("wine");
//   const [wineForRecommendation, setWineForRecommendation] = useState();

//   // defines end point that we are going to use
//   const { data: pairings } = useQuery(
//     ["dishPairingForWine", baseURL, apiKey, wine],
//     async () => {
//       return fetch(
//         `${baseURL}/food/wine/dishes?wine=${wine}&apiKey=${apiKey}`
//       ).then((res) => res.json());
//     },
//     {
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//       enabled: !!wine,
//     }
//   );

//   const { data: recommendations } = useQuery(
//     ["wineRecommendations", baseURL, apiKey, wine, wineForRecommendation],
//     async () => {
//       return fetch(
//         `${baseURL}/food/wine/recommendation?wine=${
//           wineForRecommendation || wine
//         }&number=2&apiKey=${apiKey}`
//       ).then((res) => res.json());
//     },
//     {
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//       enabled: !!wineForRecommendation || !!wine,
//     }
//   );
//   // call back function that executes when the form is submitted
//   const onFormSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       setWine(e.target.wine.value);
//       setWineForRecommendation(null);
//     },
//     [setWine]
//   );
//   // infer if the type is either wine or food
//   useEffect(() => {
//     if (!wine) return;

//     let formated_wine = wine.toLowerCase().replaceAll(" ", "_");
//     setType(wines.wines.indexOf(formated_wine) !== -1 ? "wine" : "food");
//   }, [wine, setType]);
//   // if it's wine than set the wine recommendation to the clicked wine
//   const onWineClick = useCallback((e) => {
//     e.preventDefault();
//     setWineForRecommendation(e.target.innerText);
//   }, []);

//   return (
//     // <Container >
//       <LandingPage></LandingPage>
//       // {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh"}} /> */}
//     // </Container>

//     // <main>
//     //   <form className="search-form" onSubmit={onFormSubmit}>
//     //     <datalist id="wineSearchDataList">
//     //       {wines.wines.map((value, index) => (
//     //         <option key={index}>{value.replaceAll("_", " ")}</option>
//     //       ))}
//     //     </datalist>
//     //     <input
//     //       type="text"
//     //       list="wineSearchDataList"
//     //       className="search-input"
//     //       placeholder="Food or wine"
//     //       name="wine"
//     //     />
//     //     <input type="submit" value="Search" />
//     //   </form>
//     //   <section className="results-container">
//     //     {!!pairings?.pairings?.length && (
//     //       <aside className="pairings-container">
//     //         <h2>Pairs best with</h2>
//     //         {type === "food" && (
//     //           <ul>
//     //             {pairings?.pairings?.map((value, index) => (
//     //               <li key={index}>
//     //                 <button onClick={onWineClick}>{value}</button>
//     //               </li>
//     //             ))}
//     //           </ul>
//     //         )}
//     //         {type === "wine" && (
//     //           <ul>
//     //             {pairings?.pairings?.map((value, index) => (
//     //               <li key={index}>{value}</li>
//     //             ))}
//     //           </ul>
//     //         )}
//     //       </aside>
//     //     )}
//     //     {!!recommendations?.recommendedWines?.length && (
//     //       <div className="recommendations-container">
//     //         <h2>Wine Recommendations</h2>
//     //         <ul>
//     //           {recommendations?.recommendedWines?.map((wine, index) => (
//     //             <li key={index}>
//     //               <h3>{wine.title}</h3>
//     //               <img src={wine.imageUrl} alt={wine.title} />
//     //               <span className="wine-recommendations-price">
//     //                 {wine.price}
//     //               </span>
//     //               <p>{wine.description}</p>
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>
//     //     )}
//     //   </section>
//     // </main>
//   );
// }
// export default App;

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import LandingPage from "./Modules/LandingPage";
import ProblemPage from "./Modules/ProblemPage";
import TeamPage from "./Modules/TeamPage";

const App = () => (
  // <ReactFullpage
  //   anchors={anchors}
  //   navigation
  //   navigationTooltips={anchors}
  //   navigat
  //   licenseKey="gplv3-license"
  //   credits={false}
  //   sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
  //   onLeave={(origin, destination, direction) => {
  //     console.log("onLeave event", { origin, destination, direction });
  //   }}
  //   render={({ state, fullpageApi }) => {
  //     console.log("render prop change", state, fullpageApi);

  //     return (
  //       <div>
  //         <div className="section"><h3>Section 1</h3></div>
  //         <div className="section"><h3>Section 2</h3></div>
  //         <div className="section"><h3>Section 3</h3></div>
  //       </div>
  //     );
  //   }}
  // />

  <ReactFullpage
    //fullpage options
    navigation
    licenseKey={"gplv3-license"}
    credits={false}
    scrollingSpeed={700} /* Options here */
    // sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <LandingPage />
          </div>
          <div className="section">
            <ProblemPage />
          </div>
          <div className="section">
            <TeamPage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default App;
