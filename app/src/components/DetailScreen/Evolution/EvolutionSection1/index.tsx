import React from 'react';
import { Text } from 'react-native';
import { Container, Pokemon, PokemonImage, MinLevel} from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';


type EvolutionSectionProps = {
  firstImage: string;
  firstName: string;
  secondImage: string;
  secondName: string;
  minLevel: number;
};

const EvolutionSection = ({
  firstImage,
  firstName,
  secondImage,
  secondName,
  minLevel,
}: EvolutionSectionProps) => {

  return (
    <Container>
      <Pokemon>
        <PokemonImage source={{ uri: firstImage }} />
        <Text>{firstName}</Text>
      </Pokemon>

      <MinLevel>
      <Ionicons name="arrow-forward-outline" size={32} />
        {minLevel && (<Text style={{ marginTop: 8 }}>
          Lvl {minLevel}
        </Text>)}
      </MinLevel>

      <Pokemon>
        <PokemonImage source={{ uri: secondImage }} />
        <Text>{secondName}</Text>
      </Pokemon>
    </Container>
  );
};

export default EvolutionSection;
