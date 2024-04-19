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
const TextBox = styled.View`
    margin-horizontal: 10px;
    height: 180px;
    background-color: rgba(0,0,0,.1);
    justify-content: center;
    border-radius: 5px;
`;

const CategoryBox = styled.View`
    flex:1;
    background-color: rgba(0,0,0,.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CategoryText = styled.Text`
    font-size:16px;
    font-weight: 700;
    text-align: center;
`;
const EvolutionContainer = styled.View`
    position: relative;
    padding: 5px;
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
      <TextBox>
        <CategoryBox>
          <CategoryText>
            Evolution
          </CategoryText>
        </CategoryBox>
  
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
      </TextBox>
    );
};

export default Evolution;
