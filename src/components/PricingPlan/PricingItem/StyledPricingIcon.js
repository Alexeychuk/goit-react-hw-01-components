import styled from 'styled-components';

const StyledPricingIcon = styled.i`
  :before {
    content: url(${props => props.icon});
  }
  height: 174px;
`;

export default StyledPricingIcon;
