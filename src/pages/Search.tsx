import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import Hover from '../components/common/Hover';
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
    setIsSpread(pageYOffset <= 350);
  };

  return (
    <>
      <Header>{!isSpread && <WhiteHeader />}</Header>
      <Background>
        <Header>{isSpread && <TransparentHeader />}</Header>
        <Body>
          <TitleBoard />
          <CategoryButton />
          <HrContainer />
        </Body>
      </Background>

      <Searchbar />
      <StContentSection onMouseOver={handleHover} onMouseOut={handleHoverOut}>
        {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, , 2, , 2, 2, , 2].map((_, idx) => (
          <Preview key={idx} profileImg="" name="Wedge Studio" recommandCount={129} visibleCount={129} />
        ))}
        {isHover && <Hover />}
      </StContentSection>
    </>
  );
};

export default Search;

const Background = styled.section`
  background-image: url(${background});
  height: 35rem;
  overflow: hidden;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  z-index: 5;
`;

const Body = styled.body`
  padding-top: 4.375rem;
`;

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 1.8125rem 1.875rem;
`;
