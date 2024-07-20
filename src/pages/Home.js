import React from "react";
import Header from "../components/Header";
import BriefProjects from "../components/home/BriefProjects";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BriefProjects />
      </>
    );
  }
}

export default Home;
