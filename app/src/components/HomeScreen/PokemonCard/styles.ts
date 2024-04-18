import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';
import { useMemo } from 'react';

type ButtonProps = {
  pokemonType: string;
};

export const Container = styled.View<ButtonProps>`
  border-radius: 5%;
  overflow: hidden;
  height: 110px;
  margin: 5px;
  padding: 10px;
  width: 160px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

${props =>
  props.pokemonType &&
  css`
    background-color: ${getColorByPokemonType(props.pokemonType)};
  `}
`;

export const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 4px;
  right: 4px;
`;

export const Button = styled(RectButton)`
position: relative;
`;

export const PokedexName = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
  zIndex:1;
`;

export const PokedexNumber = styled.Text`
  font-size: 14px;
  font-weight: 700;
  zIndex: 2;
  background-color: rgba(0,0,0,.1);
  margin-top: 5px;
  padding-horizontal: 5px;
  align-self: flex-start;

`;