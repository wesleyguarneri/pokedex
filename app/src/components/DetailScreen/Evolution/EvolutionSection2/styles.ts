import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  padding-bottom: 32px;
  margin-bottom: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Pokemon = styled.View`
  position: relative;
  align-items: center;
`;


export const PokemonImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

export const MinLevel = styled.View`
  align-items: center;
`;
