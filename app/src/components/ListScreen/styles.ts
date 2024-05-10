import styled, { css } from "styled-components/native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";


type TypeProps = {
    pokemonType: string;
  };

export const ImageWrapper = styled.View<TypeProps>`
    border-radius: 5%;
    overflow: hidden;
    height: 300px;
    margin-horizontal: 20px;
    width: 100%;

    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

    ${props =>
        props.pokemonType &&
        css`
          background-color: ${getColorByPokemonType(props.pokemonType)};
        `}
`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: auto;
  resizeMode: contain;
  justify-content: center;
`;
