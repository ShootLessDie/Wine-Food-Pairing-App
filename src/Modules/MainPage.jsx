import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react'
import LandingPage from './LandingPage';
import ProblemPage from './ProblemPage';
import TeamPage from './TeamPage';

const anchors = ["main", "problem", "team"]


const MainPage = () => {
  return (
    <ReactFullpage
    //fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey={"gplv3-license"}
    credits={false}
    scrollingSpeed={700} /* Options here */
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
  )
}

export default MainPage