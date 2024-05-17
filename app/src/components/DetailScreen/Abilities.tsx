import { Text, StyleSheet,View } from 'react-native';

const styles = StyleSheet.create({
  // AbilitiesBox
  AbilitiesBox: {
    marginHorizontal: 10,
    height: 90,
    borderRadius: 5,
  },
  // AbilityContainer
  AbilityContainer: {
    position: 'relative',
    flex: 3,
    margin: 0,
  },
  
  // AbilityText
  AbilityText: {
    fontSize: 16,
    width: '100%',
    margin: 0,
    padding: 0,
  },
  
  // CategoryText
  CategoryText: {
    color: 'black',
    fontSize: 28,
    fontWeight: '600',
    flex: 4,
    margin: 0,


  },
});

const Abilities = (abilities) => {
    const abilityData = abilities.abilities;
    return(
        <View style={styles.AbilitiesBox}>
            <Text style={styles.CategoryText}>Abilities</Text>
            <View style={styles.AbilityContainer}>
            {abilityData.map((ability) => {
                return (
                    <Text style={styles.AbilityText} key={ability.name}>{ability.name}</Text>
                );
            })}
            </View>
        </View>
    )
}

export default Abilities;