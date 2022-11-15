import styled from 'styled-components';

import Img from '../asset/image/searchHomeBackground.svg';
import CategoryButton from '../components/search/CategoryButton';
import HrContainer from '../components/search/HrContainer';
import TitleBoard from '../components/search/TitleBoard';
import TransparentNav from '../components/search/TransparentNav';

const Search = () => {
  return (
    <>
      <Background>
        <TransparentNav />
        <TitleBoard />
        <CategoryButton />
        <HrContainer />
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
