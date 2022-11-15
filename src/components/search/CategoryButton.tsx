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
    <Body>
      <IconContainer>
        <ArrowContainer>
          <ArrowLeft />
          <ArrowRight />
        </ArrowContainer>
        <HamburgerButton />
      </IconContainer>
      <GradientContainer>
        <GradientLeft />
        <GradientRight />
      </GradientContainer>
      <ButtonContainer>
        {categorys.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <Button>{category}</Button>
        ))}
      </ButtonContainer>
    </Body>
  );
};

export default CategoryButton;

const Body = styled.section`
  position: relative;
`;

const IconContainer = styled.section`
  width: 120rem;
  height: 5.625rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
`;

const ArrowContainer = styled.section`
  width: 112.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GradientContainer = styled.section`
  width: 120rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
`;

const GradientLeft = styled.section`
  width: 21.0625rem;
  background-image: linear-gradient(to right, black, transparent);
  height: 5.625rem;
`;
const GradientRight = styled.section`
  width: 21.0625rem;
  background-image: linear-gradient(to left, black, transparent);
  height: 5.625rem;
`;

const ButtonContainer = styled.section`
  overflow: hidden;
  width: 138.375rem;
  margin-left: -9.1875rem;
  position: absolute;
  z-index: 1;
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
