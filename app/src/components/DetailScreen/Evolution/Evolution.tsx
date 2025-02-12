import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Loading from '../../Loading';
import api from '../../../services/api';
import EvolutionChain from '../../../types/evolution-chain';
import EvolutionSection1 from './EvolutionSection1';
import EvolutionSection2 from './EvolutionSection2';

export const Content = styled.View`
  margin-top: 32px;
`;
const EvoBox = styled.View`
    margin-horizontal: 10px;
    height: 180px;
    justify-content: center;
    border-radius: 5px;
`;

const CategoryText = styled.Text`
    font-size:24px;
    font-weight: 600;
    
`;
const EvolutionContainer = styled.View`
    position: relative;
    flex: 6;
`;

const Evolution = ({ pokemon }) => {
    const [evolutions, setEvolutions] = useState({} as EvolutionChain);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      try{
        async function loadPokemonEvolutions() {
          const response = await api.get(`evolutions/${pokemon.id}`);
    
          setEvolutions(response.data);
          setLoading(false);
        }
    
        loadPokemonEvolutions();
      }
      catch(e){
        console.log(e);
      }
      
    }, [pokemon.id]);
  
    const noResponseContent = useMemo(() => {
      if (loading) {
        return <Loading />;
      }
  
      return <Text>No evolutions.</Text>;
    }, [loading]);

    return (
      <EvoBox>
        <CategoryText>
          Evolution
        </CategoryText>  
        {evolutions.first_evolution || evolutions.second_evolution ? (
          <EvolutionContainer>
            {evolutions.second_evolution && (
              <EvolutionSection2
                firstImage={evolutions.base_form.image}
                firstName={evolutions.base_form.name}
                secondName={evolutions.first_evolution.name}
                secondImage={evolutions.first_evolution.image}
                thirdName={evolutions.second_evolution.name}
                thirdImage={evolutions.second_evolution.image}
                minLevel1={evolutions.first_evolution.min_level}
                minLevel2={evolutions.second_evolution.min_level}
              />
            )}

            {evolutions.first_evolution && !evolutions.second_evolution && (
              <EvolutionSection1
                firstImage={evolutions.base_form.image}
                firstName={evolutions.base_form.name}
                secondName={evolutions.first_evolution.name}
                secondImage={evolutions.first_evolution.image}
                minLevel={evolutions.first_evolution.min_level}
              />
            )}
  
          </EvolutionContainer>
        ) : (
          <EvolutionContainer>{noResponseContent}</EvolutionContainer>
        )}
      </EvoBox>
    );
};

export default Evolution;
