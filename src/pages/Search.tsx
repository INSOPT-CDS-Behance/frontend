import { useState } from 'react';
import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import Hover from '../components/common/Hover';
import {
  CategoryBar,
  CategoryButton,
  HrContainer,
  Preview,
  Searchbar,
  TitleBoard,
  TransparentHeader,
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
      <Background>
        <TransparentHeader />
        <TitleBoard />
        <CategoryButton />
        <HrContainer />
      </Background>
      <Searchbar />
      <CategoryBar />
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

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 1.185rem 1.875rem;
`;
