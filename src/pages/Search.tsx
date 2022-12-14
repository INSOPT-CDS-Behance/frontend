import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import {
  CategoryButton,
  HrContainer,
  Preview,
  Searchbar,
  SimilarProject,
  TitleBoard,
  TransparentHeader,
  WhiteHeader,
} from '../components/search';
import { ProjectData } from '../types/project';
import { projectClicked } from '../utils/atoms';
import { getProject } from '../utils/lib/project';

const Search = () => {
  const navigate = useNavigate();
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
    setIsSpread(pageYOffset <= 450);
  };

  const [contentList, setContentList] = useState<ProjectData[]>([]);

  useEffect(() => {
    const getContentList = async () => {
      const { data } = await getProject();
      const getProjectData = data.data as ProjectData[];
      setContentList(getProjectData);
    };

    getContentList();
  }, []);

  const handleDetail = (e: React.MouseEvent, id: number) => {
    navigate(`/search/${id}`, { state: { id } });
  };

  const isProjectClicked = useRecoilValue(projectClicked);

  return (
    <StSearchPageWrapper>
      <StHeader>{!isSpread && <WhiteHeader />}</StHeader>
      <StBackground>
        <StHeader>{isSpread && <TransparentHeader />}</StHeader>
        <StBody>
          <TitleBoard />
          <CategoryButton />
          <HrContainer />
        </StBody>
      </StBackground>

      <Searchbar />

      {isProjectClicked && <SimilarProject />}

      <StContentSection>
        {contentList.map(({ id, writer, image, likeCount, viewCount }, idx) => (
          <Preview
            key={idx}
            contentPreview={{
              isHomePage: true,
              contentPreviewData: {
                projectId: id,
                profileImg: image,
                name: writer,
                recommandCount: likeCount,
                visibleCount: viewCount,
              },
            }}
            handleClick={(e: React.MouseEvent<HTMLElement>) => handleDetail(e, id)}
          />
        ))}
      </StContentSection>
    </StSearchPageWrapper>
  );
};

export default Search;

const StSearchPageWrapper = styled.section`
  width: 120rem;
`;

const StBackground = styled.div`
  height: 35rem;

  overflow: hidden;
  background-image: url(${background});
`;

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const StBody = styled.section`
  padding-top: 4.375rem;
`;

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin: 1.8125rem 1.875rem;
`;
