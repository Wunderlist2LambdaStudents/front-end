import React from 'react'
import styled from 'styled-components'

const CharacterCard = styled.div`
    /* Block */

    margin-bottom: 3%;

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export default function Character(props){
    const values = props.values
    
    return(
        <CharacterCard>
            <img src={values.image} alt={values.name}/>
            <h3>{values.name}</h3>
            <p>{values.species}</p>
        </CharacterCard>
    )
}