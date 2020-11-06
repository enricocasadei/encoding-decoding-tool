import styled from 'styled-components';

export const Paragraph = styled.p<{ size?: string; color?: string }>`
  font-size: ${props => props.size || 'inherit'};
  color: ${props => props.color || 'inherit'};
`;
