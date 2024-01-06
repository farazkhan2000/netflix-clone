import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID='3' title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowID='4' title="Top Rated" fetchUrl={requests.requestTopRated} />
    </>
  )
}

export default Home;
