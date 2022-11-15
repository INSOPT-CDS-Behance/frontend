import styled from 'styled-components';

const HrContainer = () => {
  return (
    <Container>
      <BlueHr />
      <WhiteHr />
    </Container>
  );
};

export default HrContainer;

const Container = styled.section`
  /* & > h1 {
    width: 30rem;
  }
  & > h1:first-child {
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.behance_blue};
    position: absolute;
    z-index: 2;
    width: 30rem;
  }
  & > h1:nth-child(2) {
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.behance_white};
  } */
  display: flex;
  justify-content: center;
  margin-top: 9.8125rem;
`;

const BlueHr = styled.hr`
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.behance_blue};
  position: absolute;
  z-index: 2;
  width: 30rem;
  height: 0.125rem;
  margin: 0;
`;

const WhiteHr = styled.hr`
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.behance_white};
  width: 120rem;
  height: 0.125rem;
  margin: 0;
`;
