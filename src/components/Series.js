import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Pesquisar = styled.input`
position: absolute;
top: 12%;
left: 32%;
width: 500px;
height: 20px;
border-style: none;
background-color: white;
text-align: center;
color: #262626;
`;

const Container = styled.div`
max-width: 70%;
margin-top: 5%;
margin-left: 3%;
`;

const Imagens = styled.img`
width: 20%;
`;

const Titulos = styled.h1`
margin-bottom: 2%;
font-size: 20px;
font-family: Roboto;
`;

const Desc = styled.p`
font-family: Roboto;
margin-top: 2%;
`;

const apiSeries = axios.create({
  baseURL:
    " https://api.themoviedb.org/3/tv/popular?api_key=3ebcc8d258f187ffff446bc8bd2e312c&language=pt-BR "
});

export default class Moonflix extends React.Component {
  state = {
    listarSeries: [],
    procurarSeries: []
  };

  getSeries = async () => {
    const seriados = await apiSeries.get();
    console.log(seriados.data.results);
    const Series = seriados.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`
      };
    });

    this.setState({
      listarSeries: Series,
      procurarSeries: Series
    });
  };
  componentDidMount() {
    this.getSeries();
  }

  filtrarSeries = (e) => {
    const { listarSeries } = this.state;
    const filtrarSeries = listarSeries.filter((filtrar) => {
      return (filtrar.name.toLowerCase().includes(e.target.value.toLowerCase()))
    });
    this.setState({
      procurarSeries: filtrarSeries
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Pesquisar
          type="text"
          placeholder="Pesquise uma série!"
          onChange={this.filtrarSeries}
          />
        {this.state.procurarSeries.map((item) => (
          <Container>
            <Titulos>{item.name}</Titulos>
            <Imagens src={item.poster_path} alt={item.name} />
           <Desc>{item.overview} </Desc>
          </Container>
        ))}
      </div>
    );
  }
}