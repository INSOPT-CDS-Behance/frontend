import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import { Hover } from '../components/common';
import {
  CategoryButton,
  HrContainer,
  Preview,
  Searchbar,
  TitleBoard,
  TransparentHeader,
  WhiteHeader,
} from '../components/search';

const Search = () => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };

  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setIsSpread(pageYOffset <= 450);
  };

  return (
    <>
      <StHeader>{!isSpread && <WhiteHeader />}</StHeader>
      <StBackground>
        <StHeader>{isSpread && <TransparentHeader />}</StHeader>
        <StBody>
          <TitleBoard />
          <CategoryButton />
          <HrContainer />
        </StBody>
      </StBackground>

      <Searchbar />

      <StContentSection onMouseOver={handleHover} onMouseOut={handleHoverOut}>
        {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, , 2, , 2, 2, , 2].map((_, idx) => (
          <Preview key={idx} projectId={2} profileImg="" name="Wedge Studio" recommandCount={129} visibleCount={129} />
        ))}
        {isHover && <Hover />}
      </StContentSection>
    </>
  );
};

export default Search;

const StBackground = styled.section`
  height: 35rem;

  overflow: hidden;
  background-image: url(${background});
`;

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const StBody = styled.section`
  padding-top: 4.375rem;
`;

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin: 1.8125rem 1.875rem;
`;
