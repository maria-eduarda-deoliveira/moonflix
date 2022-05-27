import React from "react";
import styled from "styled-components";

const Lua = styled.img`
  position: absolute;
  left: 35%;
  bottom: 20%;
  width: 30%;
`;

const Nome = styled.h1`
  position: absolute;
  top: 75vh;
  left: 43%;
  font-family: "Merienda", cursive;
  font-size: 40px;
`;

const Sobre = styled.p`
  position: absolute;
  font-size: 20px;
  font-family: Roboto;
  top: 85vh;
  left: 39%;
`;

export default class MoonFlix extends React.Component {
  render() {
    return (
      <div>
        <Lua src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe6679b3-cc4c-427d-b0db-c9d1baba04af/ddbm9ho-8b304685-cb1c-45b4-8813-044798e68c07.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNjY3OWIzLWNjNGMtNDI3ZC1iMGRiLWM5ZDFiYWJhMDRhZlwvZGRibTloby04YjMwNDY4NS1jYjFjLTQ1YjQtODgxMy0wNDQ3OThlNjhjMDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I9SrxMe_i58_aT9bkjLGbJTH9v9tOtXDdBQvQOlCaZU" />
        <Nome>MoonFlix</Nome>
        <Sobre>Relaxe e se divirta à luz do luar.</Sobre>
      </div>
    );
  }
}
