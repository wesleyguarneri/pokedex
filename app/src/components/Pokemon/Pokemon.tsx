import React, { FC } from 'react';
import styled from 'styled-components/native';

interface PokemonProps {}

const Container = styled.View`
  flex: 1;
  background-color: blue;`;

const Content = styled.View`
`;


const Pokemon: FC<PokemonProps> = () => (
         <Container>
            <Content>

            </Content>
         </Container>
);

export default Pokemon;
