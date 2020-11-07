import styled from 'styled-components';

export const ClearInput = styled.button<{ disabled?: boolean }>`
  transition-duration: 0.4s;
  border: none;
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
  outline: none;
  background: transparent;
  color: #a80f0f;
  cursor: pointer;
  min-height: 26px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #a80f0f;
    color: rgba(0, 0, 0, 0.9);
  }
  ${props =>
    props.disabled === true &&
    `
  color: rgba(0, 0, 0, 0.9);
  cursor: none;
  &:hover {
    box-shadow: 0 0 transparent;
    background-color: transparent;
  }
  `};
`;
