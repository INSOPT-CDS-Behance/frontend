import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
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
  background-image: url(${background});
  height: 35rem;
  overflow: hidden;
`;
