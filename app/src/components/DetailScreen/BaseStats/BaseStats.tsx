import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles, StatValueStyles} from './styles'

const BaseStats = ( pokemon ) => {
  return (
    <View style={styles.baseStatsContainer}>
      <Text style={styles.pokedexName}>Stats</Text>
      {pokemon.stats.map(stat => (
        <View style={styles.stat} key={stat.url}>
          <Text style={styles.statName}>
            {stat.name}
          </Text>
          <View style={styles.statGraph}>
            <Text style={styles.statBaseStat}>
              {stat.base_stat}
            </Text>
            <View style={styles.statLine}>
              <View style={[StatValueStyles(stat.base_stat).statValue, { width: `${stat.base_stat}%` }]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};


export default BaseStats;
