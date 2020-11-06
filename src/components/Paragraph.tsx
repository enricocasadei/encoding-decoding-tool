import styled from 'styled-components';


export const Paragraph = styled.p<{ size?: string; }> `
  font-size: ${props => props.size || 'inherit'};
`;
