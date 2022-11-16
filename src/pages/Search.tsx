import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import CategoryBar from '../components/search/CategoryBar';
import CategoryButton from '../components/search/CategoryButton';
import HrContainer from '../components/search/HrContainer';
import Searchbar from '../components/search/Searchbar';
import TitleBoard from '../components/search/TitleBoard';
import TransparentHeader from '../components/search/TransparentHeader';

const Search = () => {
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
    </>
  );
};

export default Search;

const Background = styled.section`
  background-image: url(${background});
  height: 35rem;
  overflow: hidden;
`;
