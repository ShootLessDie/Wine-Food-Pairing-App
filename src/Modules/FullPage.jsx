import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LandingPage from "./LandingPage";
import ProblemPage from "./ProblemPage";
import TeamPage from "./TeamPage";

const FullPage = () => (
  <ReactFullpage
    navigation
    licenseKey={"gplv3-license"}
    credits={{ enabled: true, label: "Made with FullPage.js" }}
    scrollingSpeed={100}
    scrollOverflow={false}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <LandingPage />
        </div>
        <div className="section">
          <ProblemPage />
        </div>
        <div className="section fp-noscroll fp-auto-height-responsive">
          <TeamPage />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);
export default FullPage;
