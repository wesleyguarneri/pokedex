import styled, { css } from 'styled-components/native';
import getColorByPokemonType from '../../utils/getColorByPokemonType';


type TypeProps = {
    pokemonType: string;
  };

  
export const NameWrapper = styled.View`
    height: 30px;
    flex-direction: row;
`;
export const PokedexName = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 600;
  flex:5.5;
`;

export const PokedexNumber = styled.Text`
    font-size: 18px;
    font-weight: 700;
    margin-top: 3px;
    border-radius: 5px;
    padding-horizontal: 5px;
    margin-right: 5px;
    flex:3;
    `;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: auto;
  resizeMode: contain;
  justify-content: center;
`;

export const ImageWrapper = styled.View<TypeProps>`
    border-radius: 5%;
    overflow: hidden;
    height: 300px;
    margin-horizontal: 20px;
    width: max;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

    ${props =>
        props.pokemonType &&
        css`
          background-color: ${getColorByPokemonType(props.pokemonType)};
        `}
`;

export const TypeContainer = styled.View`
    justify-content: center;
    height: 50px;
    flex-direction: row;
`;

export const TypeWrapper = styled.View`
    height: 30px;
    width: 90px;
    margin: 5px;
    border-radius: 5px;
    justify-content: center;
    flex-direction: row;
    background-color: white;
    border: 1px solid black;
`;

export const TypeText = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-top: 3px;
    margin-horizontal: 5px;
`;

export const MetricsWrapper = styled.View`
  justify-content: center;
  height: 50px;
  flex-direction: row;
`;

export const Metrics = styled.Text`
  font-size: 18px;
`;
