import { useState } from 'react';
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

  return (
    <>
      <WhiteHeader />
      {/* <Background>
        <Header>
          <TransparentHeader />
        </Header>
        <Section>
          <TitleBoard />
          <CategoryButton />
          <HrContainer />
        </Section>
      </Background> */}
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
`;

const Section = styled.section`
  padding-top: 4.375rem;
`;

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 1.8125rem 1.875rem;
`;
