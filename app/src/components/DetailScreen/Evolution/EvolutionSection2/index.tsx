import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';
import {
  Container,
  Pokemon,
  PokemonImage,
  MinLevel,
} from './styles';

type EvolutionSectionProps = {
  firstImage: string;
  firstName: string;
  secondImage: string;
  secondName: string;
  thirdImage: string;
  thirdName: string;
  minLevel1: number;
  minLevel2: number;
};

const EvolutionSection2 = ({
  firstImage,
  firstName,
  secondImage,
  secondName,
  thirdImage,
  thirdName,
  minLevel1,
  minLevel2,
}: EvolutionSectionProps) => {

  return (
    <Container>
      <Pokemon>
        <PokemonImage source={{ uri: firstImage }} />
        <Text>{firstName}</Text>
      </Pokemon>

      <MinLevel>
      <Ionicons name="checkmark-circle" size={32} color="green" />
        <Text style={{ marginTop: 8 }}>
          Lvl {minLevel1}
        </Text>
      </MinLevel>

      <Pokemon>
        <PokemonImage source={{ uri: secondImage }} />
        <Text>{secondName}</Text>
      </Pokemon>

      <MinLevel>
      <Ionicons name="checkmark-circle" size={32} color="green" />
        <Text style={{ marginTop: 8 }}>
          Lvl {minLevel2}
        </Text>
      </MinLevel>

      <Pokemon>
        <PokemonImage source={{ uri: thirdImage }} />
        <Text>{thirdName}</Text>
      </Pokemon>
    </Container>
  );
};

export default EvolutionSection2;
