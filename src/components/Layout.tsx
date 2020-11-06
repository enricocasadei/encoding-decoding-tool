import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  margin: 2rem auto;
  box-sizing: border-box;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-column-gap: 26px;
`;
