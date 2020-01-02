import React from 'react';
import styled from 'styled-components';
import { lessThan } from '../constants/mediaQ';

const footer = () => {
  return (
    <ContentContainer>
      <StyledHeader>Caroline & Chris </StyledHeader>
      <Line>|</Line>
      <StyledHeader>Saturday, March 7, 2020 </StyledHeader>
      <Line>|</Line>
      <StyledHeader>Six in the Evening</StyledHeader>
      <Line>|</Line>
      <StyledHeader>The Great Room at Historic Savage Mill</StyledHeader>
      <Reserve>Designed and Developed by Chris and Caroline</Reserve>
    </ContentContainer>
  );
};

export default footer;

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    text-align: center;
    padding: 60px 0;

    ${lessThan.tablet} {
    padding: 40px 0 30px;
    display: grid;
    grid-template-columns: 100%;
    }
}`;

const StyledContainer = styled.div`
  background-color: white;
`;

const StyledEyebrow = styled.p`
  font-size: 20px;
  font-weight: 100;
  color: black;
`;

const Line = styled.span`
  font-size: 30px;
  font-family: Canela-Light;
  ${lessThan.tablet} {
    display: none;
  }
`;

const StyledHeader = styled.span`
  font-size: 22px;
  font-weight: 100;
  color: black;
  font-family: Canela-Light;
  padding: 0 12px;

  ${lessThan.tablet} {
    font-size: 19px;
    padding: 0px;
    line-height: 30px;
  }
`;

const Reserve = styled.div`
  margin: 0 auto;
  font-family: Canela-Light;
  padding-top: 20px;
  font-size: 15px;
`;
