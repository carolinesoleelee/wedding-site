import React from 'react';
import styled from 'styled-components';
import {OurLogoIcon} from '../../icons/svgs';

const StyledLogo = styled.a`
  cursor: pointer;
  position: fixed;
  display: block;
  z-index: 3;
  transform: translateY(0px);
  transition: transform 0.2s ease-in-out 0.1s;
  top: 30px;
  left: 30px;
  /* ${greaterThan.tablet} {
    top: 40px;
    left: 80px;
  } */
`;

const SpanContainer = styled.span`
  width: 3.125rem;
  display: block;
  max-width: 50px;
  color: grey;
`;

const OurLogo = () => {
  return (
    <StyledLogo href="/">
      <SpanContainer>
        <OurLogoIcon />
      </SpanContainer>
    </StyledLogo>
  );
};
export default OurLogo;
