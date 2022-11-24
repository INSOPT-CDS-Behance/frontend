import { useState } from 'react';
import styled from 'styled-components';

import { ArrowLeft, ArrowRight, BlueHamburgerButton, HamburgerButton } from '../../asset/icon';
import illustrate from '../../asset/image/illustrate.png';
import photoshop from '../../asset/image/photoshop.png';
import theme from '../../styles/theme';
import { CategoryList } from '../../types/common';
import HamburgerModal from './HamBurgerModal';

const CategoryButton = (): JSX.Element => {
  const categorys: CategoryList[] = [
    { id: 1, title: 'Photoshop', color: 'transparent', imgSrc: photoshop },
    { id: 2, title: 'Photoshop', color: 'transparent', imgSrc: photoshop },
    { id: 3, title: 'Illustrate', color: 'transparent', imgSrc: illustrate },
    { id: 4, title: 'Photoshop', color: 'transparent', imgSrc: photoshop },
    { id: 5, title: '최고의 Behance', color: '#2456f7', imgSrc: '#' },
    { id: 6, title: 'Illustrate', color: 'transparent', imgSrc: illustrate },
    { id: 7, title: 'Photoshop', color: 'transparent', imgSrc: photoshop },
    { id: 8, title: 'Illustrate', color: 'transparent', imgSrc: illustrate },
    { id: 9, title: 'Illustrate', color: 'transparent', imgSrc: illustrate },
  ];

  const [hamburgerClicked, sethamburgerClicked] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    sethamburgerClicked((prev) => !prev);
  };

  return (
    <>
      <StHamBurgerButtonWrapper>
        {!hamburgerClicked ? (
          <HamburgerButton onClick={handleHamburgerClick} />
        ) : (
          <StBlueHamburgerButton onClick={handleHamburgerClick} />
        )}
      </StHamBurgerButtonWrapper>

      {hamburgerClicked && <HamburgerModal />}

      <StCategoryButtonWrapper>
        <StIconWrapper>
          <StArrowWrapper>
            <ArrowLeft />
            <ArrowRight />
          </StArrowWrapper>
        </StIconWrapper>
        <StGradientWrapper>
          <StGradientLeft />
          <StGradientRight />
        </StGradientWrapper>
        <StButtonWrapper>
          {categorys.map(({ id, color, imgSrc, title }) => (
            <StButton
              type="button"
              key={id}
              style={{
                backgroundColor: color,
                backgroundImage: `url(${imgSrc})`,
              }}>
              {title}
            </StButton>
          ))}
        </StButtonWrapper>
      </StCategoryButtonWrapper>
    </>
  );
};

export default CategoryButton;

const StHamBurgerButtonWrapper = styled.section`
  position: absolute;
  z-index: 6;
  margin-left: 114.6875rem;
`;

const StBlueHamburgerButton = styled(BlueHamburgerButton)`
  margin-top: 1rem;
`;

const StCategoryButtonWrapper = styled.section`
  position: relative;
`;

const StIconWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 3;

  width: 120rem;
  height: 5.625rem;
`;

const StArrowWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 112.5rem;
`;

const StGradientWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 2;

  width: 120rem;
`;

const StGradientLeft = styled.div`
  width: 21.0625rem;
  height: 5.625rem;

  background-image: linear-gradient(to right, black, transparent);
`;
const StGradientRight = styled.div`
  width: 21.0625rem;
  height: 5.625rem;

  background-image: linear-gradient(to left, black, transparent);
`;

const StButtonWrapper = styled.section`
  position: absolute;
  z-index: 1;

  width: 138.375rem;

  margin-left: -9.1875rem;
  overflow: hidden;
`;

const StButton = styled.button`
  width: 14.375rem;
  height: 5.625rem;
  flex-grow: 0;

  margin: 0 0.5rem;
  padding: 1.9375rem 1.6875rem 1.875rem;

  border: 0.0625rem solid black;
  border-radius: 0.25rem;

  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
`;
