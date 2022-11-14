import styled from 'styled-components';

import Img from '../asset/image/searchHomeBackground.svg';
import CategoryButton from '../components/search/CategoryButton';
import TitleBoard from '../components/search/TitleBoard';
import TransparentNav from '../components/search/TransparentNav';

const Search = () => {
  return (
    <>
      <Background>
        <TransparentNav />
        <TitleBoard />
        <ButtonContainer>
          <CategoryButton />
        </ButtonContainer>
      </Background>
    </>
  );
};

export default Search;

const Background = styled.section`
  background-color: black;
  background-image: url(../asset/image/searchHomeBackground.svg);
  height: 35rem;
  overflow: hidden;
`;

const ButtonContainer = styled.section`
  /* overflow: hidden;
  width: 138.375rem;
  margin-left: -9.1875rem; */
`;
