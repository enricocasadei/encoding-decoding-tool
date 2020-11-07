import styled from 'styled-components';

const CardBody = styled.div`
  height: fit-content;
  border-radius: 2px;
  border: 1px solid #8e8e8e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
`;

const CardHeader = styled.div`
  background: rgba(0, 0, 0, 0.03);
  padding: 1rem 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
const CardFooter = styled.div`
  min-height: 26px;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

const CardContent = styled.div`
  background: white;
  padding: 1rem;
  font-size: 1rem;
  & > p + p {
    padding-bottom: 1rem;
  }
`;

export const Card = {
  CardBody,
  CardHeader,
  CardFooter,
  CardContent,
};
