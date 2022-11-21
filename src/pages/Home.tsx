import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ICBehance } from '../asset/icon';
import { ContentPreview, PersonalInfo } from '../components/common';
import { Header, SearchInput } from '../components/Home';
import PageCategory from '../components/Home/PageCategory';
import { HeaderLayout } from '../components/layout';
import { getProject } from '../utils/lib/project';

const Home = () => {
  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  useEffect(() => {
    const getContentList = async () => {
      const data = await getProject();
      console.log(data);
    };

    getContentList();
  }, []);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setIsSpread(pageYOffset <= 410);
  };
  return (
    <>
      <HeaderLayout
        isWhite={true}
        Logo={<ICBehance />}
        CategoryInfo={<PageCategory isSpread={isSpread} currentCategory="당신을 위한" />}
        PersonalInfo={<PersonalInfo />}>
        {!isSpread && <SearchInput isSpread={isSpread} />}
      </HeaderLayout>
      <StContentWrapper>
        <Header />
        <StContentSection>
          {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, , 2, , 2, 2, , 2].map((_, idx) => (
            <ContentPreview
              key={idx}
              isHomePage={true}
              contentPrviewData={{
                profileImg: '',
                name: 'Wedge Studio',
                recommandCount: 129,
                visibleCount: 129,
              }}
            />
          ))}
        </StContentSection>
      </StContentWrapper>
    </>
  );
};

export default Home;
const StContentWrapper = styled.div`
  margin-top: 4.375rem;
`;
const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
`;
