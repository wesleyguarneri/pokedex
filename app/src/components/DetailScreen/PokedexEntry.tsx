import { Alert, Animated, Text } from 'react-native';
import styled from 'styled-components/native';

const TextBox = styled.View`
    margin: 10px;
    height: 80px;
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
const EntryText = styled.Text`
    justify-content: center;
    font-size: 16px;
    text-align: center;
    width: max;
    flex: 2;
    padding: 5px;

`;
const CategoryText = styled.Text`
    font-size:16px;
    font-weight: 700;
    text-align: center;
    padding: 3px;
`;

const PokedexEntry = (pokedexEntry) => {
    const desc = pokedexEntry.pokemonDescription;
    
    return(
        <TextBox>
            <CategoryBox>
                <CategoryText>{pokedexEntry.pokemonCategory}</CategoryText>
            </CategoryBox>
            <EntryText>{desc}</EntryText>
        </TextBox>
    )
}

export default PokedexEntry;