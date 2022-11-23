import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import background from '../asset/image/searchHomeBackground.svg';
import Hover from '../components/common/Hover';
import Modal from '../components/common/Modal';
import {
  CategoryButton,
  HrContainer,
  Preview,
  Searchbar,
  TitleBoard,
  TransparentHeader,
  WhiteHeader,
} from '../components/Search';
import { ProjectData } from '../types/project';
import { getProject } from '../utils/lib/project';

const Search = () => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };

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

  return (
    <>
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

      <StContentSection onMouseOver={handleHover} onMouseOut={handleHoverOut}>
        {contentList.map(({ id, writer, image, likeCount, viewCount }, idx) => (
          <Preview
            key={idx}
            isHomePage={true}
            contentPreviewData={{
              projectId: id,
              profileImg: image,
              name: writer,
              recommandCount: likeCount,
              visibleCount: viewCount,
            }}
          />
        ))}
        {isHover && <Hover />}
      </StContentSection>
    </>
  );
};

export default Search;

const StBackground = styled.section`
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
