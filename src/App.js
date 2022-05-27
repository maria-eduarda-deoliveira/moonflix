import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #262626;
  color: white;
  text-decoration: none;
}
`;

const Lista = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-size: 20px;
  margin-top: 2%;
  font-family: Roboto;

  a:hover {
    color: #d8bfd8;
    background: #3d3d3d;
    padding: 10px;
  }
`;

export default class MoonFlix extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <nav>
          <Lista>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Filmes</Link>
            </li>
            <li>
              <Link to="/Series">Séries</Link>
            </li>
          </Lista>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}
