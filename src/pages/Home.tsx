import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ICBehance } from '../asset/icon';
import { ContentPreview, PersonalInfo } from '../components/common';
import { Header, SearchInput } from '../components/Home';
import PageCategory from '../components/Home/PageCategory';
import { HeaderLayout } from '../components/layout';
import { ProjectData } from '../types/project';
import { getProject } from '../utils/lib/project';

const Home = () => {
  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const [contentList, setContentList] = useState<ProjectData[]>([]);

  useEffect(() => {
    const getContentList = async () => {
      const { data } = await getProject();
      const getProjectData = data.data as ProjectData[];
      setContentList(getProjectData);
    };

    getContentList();
  }, []);

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
          {contentList.map(({ id, writer, image, likeCount, viewCount }, idx) => (
            <ContentPreview
              key={idx}
              isHomePage={true}
              contentPrviewData={{
                projectId: id,
                profileImg: image,
                name: writer,
                recommandCount: likeCount,
                visibleCount: viewCount,
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
