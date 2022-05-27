import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
background-color: #262626;
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

const apiMovies = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=3ebcc8d258f187ffff446bc8bd2e312c&language=pt-br"
});

export default class MoonFlix extends React.Component {
  state = {
    listar: [],
    procurar: []
  };

  getMovies = async () => {
    const response = await apiMovies.get();
    console.log(response.data.results);
    const movies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`
      };
    });

    this.setState({
      listar: movies,
      procurar: movies
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  filtroFilmes = (e) => {
    let { listar } = this.state;
    const filmesFiltrados = listar.filter((filtro) => {
      return (filtro.title.toLowerCase().includes(e.target.value.toLowerCase())) 
    });
    
    this.setState({
      procurar: filmesFiltrados
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
          <Pesquisar
            type="text"
            placeholder="Pesquise um filme!"
            onChange={this.filtroFilmes}
          />
        {this.state.procurar.map((item) => (
          <Container>
            <Titulos>{item.title}</Titulos>
           <Imagens src={item.poster_path} alt={item.title} />
           <Desc>{item.overview} </Desc>
          </Container>
        ))}
      </div>
    );
  }
}