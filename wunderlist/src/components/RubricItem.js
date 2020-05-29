import React from 'react'
import Character from './reuse/Character'
import styled from 'styled-components'

const CharacterContainer = styled.div`
    /* Block */
    margin-top: 5%;
    /* Flex */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export default function RubricItem(props){
    const characters = props.characters
    
    return(
        <CharacterContainer>
            {characters.map(character => {
                return(<Character values={character} />)
            })}
        </CharacterContainer>
    )
}