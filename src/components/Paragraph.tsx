import styled from 'styled-components';

export const Paragraph = styled.p<{ size?: string; color?: string; border?: string }>`
  box-sizing: border-box;
  font-size: ${props => props.size || 'inherit'};
  color: ${props => props.color || 'inherit'};
  line-height: 1rem;
  ${props =>
    props.border
      ? `
  border: ${props.border};
  padding: .5rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  `
      : ''}
`;
