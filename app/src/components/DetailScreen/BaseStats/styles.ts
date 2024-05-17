import { StyleSheet } from 'react-native'

type StatValueProps = {
    width: number;
  };
  
  export const StatValueStyles = (props: StatValueProps) => {
    const { width } = props;
  
    return StyleSheet.create({
      statValue: {
        height: 3,
        backgroundColor: width < 50 ? 'red' : 'green',
        width: `${width}%`,
      },
    });
  };
  
  
export const styles = StyleSheet.create({
    baseStatsContainer: {
        margin: 10,
        height: 240,
        justifyContent: 'center',
        borderRadius: 5,
    },
    pokedexName: {
        color: 'black',
        fontSize: 24,
        fontWeight: '600',
        flex: 4,
    },
    stat: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statGraph: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statLine: {
        flex: 1,
        overflow: 'hidden',
        height: 3,
        marginLeft: 16,
    },
    statValue: {
        height: 3,
    },
    statName: {
        width: 100,
    },
    statBaseStat: {
        width: 30,
        textAlign: 'right',
    },
});

export default styles;