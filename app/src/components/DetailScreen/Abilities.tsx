import { Alert, Animated, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

const TextBox = styled.View`
    margin-horizontal: 10px;
    height: 90px;
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

const AbilityContainer = styled.View`
    position: relative;
    flex: 2;
`;

const AbilityText = styled.Text`
    justify-content: center;
    font-size: 16px;
    text-align: center;
    width: max;

`;
const CategoryText = styled.Text`
    font-size:16px;
    font-weight: 700;
    text-align: center;
`;

const Abilities = (abilities) => {
    const abilityData = abilities.abilities;
    return(
        <TextBox>
            <CategoryBox>
                <CategoryText>Abilities</CategoryText>
            </CategoryBox>
            <AbilityContainer>
            {abilityData.map((ability) => {
                return (
                    <AbilityText key={ability.name}>{ability.name}</AbilityText>
                );
            })}
            </AbilityContainer>
        </TextBox>
    )
}

export default Abilities;