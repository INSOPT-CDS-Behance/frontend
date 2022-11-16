import styled from 'styled-components';

import { ArrowRight } from '../../asset/icon';

const CategoryBar = () => {
  return (
    <Body>
      <section>
        <Arrow />
        <Gradient />
      </section>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
          <button key={index}>digital art</button>
        ))}
      </Container>
    </Body>
  );
};

export default CategoryBar;

const Body = styled.section`
  position: relative;
  & > section {
    display: flex;
    justify-content: flex-end;
  }
`;

const Container = styled.section`
  margin-left: 2.0625rem;
  margin-right: 4.375rem;
  position: relative;

  & > button {
    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_17};
    color: ${({ theme }) => theme.colors.behance_white};
    width: 7.8125rem;
    height: 3rem;
    padding: 1rem 1.5rem 0.75rem 1.5rem;
    border-radius: 6.25rem;
    border: 1px solid transparent;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.behance_black};
    margin-top: 2.5625rem;
  }
`;

const Gradient = styled.section`
  position: absolute;
  z-index: 2;
  width: 13.125rem;
  background-image: linear-gradient(to left, white, transparent);
  height: 5.625rem;
  margin-top: 1.25rem;
`;

const Arrow = styled(ArrowRight)`
  position: absolute;
  z-index: 3;
  margin-top: 2.35rem;
  margin-right: 2.5rem;
`;
