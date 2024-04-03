import React from "react";
import Main from "../../componets/Main/Main";
import Requests from "../../Requests/Requests";
import Row from "../../componets/Row/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="Up Coming" fetchUrl={Requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetchUrl={Requests.requestPopular} />
      <Row rowID='3' title="Trending" fetchUrl={Requests.requestTrending} />
      <Row rowID='4' title="Top Rated" fetchUrl={Requests.requestTopRated} />
      <Row rowID='5' title="Horror" fetchUrl={Requests.requestHorror} />
    </>
  );
};

export default Home;
