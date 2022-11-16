import styled from 'styled-components';

import { ICBehance } from '../asset/icon';
import { ContentPreview, PersonalInfo } from '../components/common';
import { Header } from '../components/Home';
import PageCategory from '../components/Home/PageCategory';
import { HeaderLayout } from '../components/layout';
const Home = () => {
  return (
    <>
      <HeaderLayout
        isWhite={true}
        Logo={<ICBehance />}
        CategoryInfo={<PageCategory />}
        PersonalInfo={<PersonalInfo />}></HeaderLayout>
      <StBody>
        <Header />
        <StContentSection>
          {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, , 2, , 2, 2, , 2].map((_, idx) => (
            <ContentPreview key={idx} profileImg="" name="Wedge Studio" recommandCount={129} visibleCount={129} />
          ))}
        </StContentSection>
      </StBody>
    </>
  );
};

export default Home;
const StBody = styled.body`
  padding-top: 4.375rem;
`;
const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1.875rem;
`;
