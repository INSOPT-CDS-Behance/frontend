/* eslint-disable import/no-duplicates */
import styled from 'styled-components';

import { ArrowRight } from '../../asset/icon';
import { ArrowLeft } from '../../asset/icon';
// eslint-disable-next-line import/no-duplicates
import { HamburgerButton } from '../../asset/icon';

const CategoryButton = () => {
  const categorys = [
    'Photoshop',
    'Photoshop',
    'Illustrate',
    'Photoshop',
    '최고의 Behance',
    'Illustrate',
    'Photoshop',
    'Illustrate',
    'Illustrate',
  ];
  return (
    <>
      <GradientContainer>
        <GradientLeft />
        <GradientRight />
      </GradientContainer>
      <Container>
        {categorys.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <Button>{category}</Button>
        ))}
      </Container>
    </>
  );
};

export default CategoryButton;

const GradientContainer = styled.div`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
`;

const GradientLeft = styled.div`
  width: 21.0625rem;
  background-image: linear-gradient(to right, black, transparent);
  height: 5.625rem;
`;
const GradientRight = styled.div`
  width: 21.0625rem;
  background-image: linear-gradient(to left, black, transparent);
  height: 5.625rem;
`;

const Container = styled.section`
  position: absolute;
  z-index: 1;
  overflow: hidden;
  width: 138.375rem;
  margin-left: -9.1875rem;
  background: linear-gradient(45deg, black, transparent);
`;

const Button = styled.button`
  width: 14.375rem;
  height: 5.625rem;
  flex-grow: 0;
  margin: 0 0.5rem;
  padding: 1.9375rem 1.6875rem 1.875rem;
  border: 1px solid black;
  border-radius: 0.25rem;

  ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
`;
