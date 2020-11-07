import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-column-gap: 26px;
  grid-row-gap: 26px;
`;
