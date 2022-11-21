import styled from 'styled-components';

const HrContainer = () => {
  return (
    <StHrWrapper>
      <StBlueHr />
      <StWhiteHr />
    </StHrWrapper>
  );
};

export default HrContainer;

const StHrWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 9.8125rem;
`;

const StBlueHr = styled.hr`
  position: absolute;
  z-index: 2;

  width: 30rem;
  height: 0.125rem;
  margin: 0;

  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.behance_blue};
`;

const StWhiteHr = styled.hr`
  width: 120rem;
  height: 0.125rem;
  margin: 0;

  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.behance_white};
`;
