import React from 'react';
import { Alert, Animated, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

type StatValueProps = {
  width: number;
};

export const Stat = styled.View`
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const StatGraph = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
`;

export const StatLine = styled.View`
  flex: 1;
  overflow: hidden;
  height: 3px;
  margin-left: 16px;
`;

export const StatValue = styled(Animated.View)<StatValueProps>`
  height: 3px;
  background: ${({width }) =>
    width < 50 ? 'red' : 'green'};
  width: ${props => props.width}%;
`;


const BaseStats = (pokemon) => {
  return (
    <>
      {pokemon.stats.map(stat => (
        <Stat key={stat.url}>
          <Text style={{ width: 100 }}>
            {stat.name}
          </Text>

          <StatGraph>
            <Text style={{ width: 30, textAlign: 'right' }}>
              {stat.base_stat}
            </Text>

            <StatLine>
              <StatValue width={stat.base_stat} />
            </StatLine>
          </StatGraph>
        </Stat>
      ))}
    </>
  );
};

export default BaseStats;
