import React from 'react'
import styled from 'styled-components'

const locationSection = () => {
    return (
        <StyledContainer>
        <ContentContainer>
            <StyledGridContainer>
        <div>
        <p>WHEN</p>
        <h1>Saturday
        March 7, 2020</h1> 
        <p>Ceremony: 6pm—7pm</p>
        <p>Reception: 7pm—11pm</p>
        </div>

        <div>
        <p>WHERE</p>
        <h1>The Great Room 
        at Historic Savage Mill</h1> 
        <p>8600 Foundry Street
        Savage, MD 20763</p>
        </div>
</StyledGridContainer>
</ContentContainer>
</StyledContainer>
    )
}

export default locationSection;

const StyledContainer = styled.div`
    background-color: rgb(185, 162, 119);
    color: white;
`

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
    padding: 200px 0;
`

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
`