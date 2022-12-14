import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ArrowRight, ICClose, ICDropdown, ICOpenLink } from '../../asset/icon';
import { ProjectData } from '../../types/project';
import { projectClicked } from '../../utils/atoms';
import { getProject } from '../../utils/lib/project';
import Thumbnail from './LeftThumbnail';

const SimilarProject = () => {
  const [searchHoverClicked, setsearchHoverClicked] = useRecoilState<boolean>(projectClicked);

  const handleProjectClick = () => {
    setsearchHoverClicked((prev) => !prev);
  };

  const [contentList, setContentList] = useState<ProjectData[]>([]);
  const [leftThumbnail, setLeftThumbnail] = useState<string>();

  useEffect(() => {
    const getContentList = async () => {
      const { data } = await getProject();
      const getProjectData = data.data as ProjectData[];
      const getImgSrc = getProjectData[0].image;
      setContentList(getProjectData);
      setLeftThumbnail(getImgSrc);
    };

    getContentList();
  }, [contentList]);

  return (
    <>
      {searchHoverClicked && (
        <StSimilarProjectWrapper>
          <StLeft>
            <div>
              <p>다음과 유사</p>
              <button type="button" onClick={handleProjectClick}>
                <p>지우기</p>
                <ICClose />
              </button>
            </div>
            <img src={leftThumbnail} alt="썸네일 이미지" />
            <div>
              <p>여러 소유자</p>
              <ICDropdown fill="white" />
            </div>
            <div>
              <ICOpenLink fill="${({ theme }) => theme.colors.behance_gray500}" />
              <p>전체 프로젝트 보기</p>
            </div>
          </StLeft>
          <hr />
          <StRight>
            <StIconWrapper>
              <StArrowRight />
            </StIconWrapper>
            <div></div>
            {contentList.map(({ id, writer, image, likeCount, viewCount }, idx) => (
              <Thumbnail
                key={idx}
                previewData={{
                  projectId: id,
                  profileImg: image,
                  name: writer,
                  recommandCount: likeCount,
                  visibleCount: viewCount,
                }}
              />
            ))}
          </StRight>
          <StHr>
            <hr />
            <hr />
          </StHr>
        </StSimilarProjectWrapper>
      )}
    </>
  );
};

export default SimilarProject;

const StSimilarProjectWrapper = styled.section`
  display: flex;

  width: 120rem;
  height: 35rem;

  background-color: ${({ theme }) => theme.colors.behance_black};

  & > hr {
    width: 0.0625rem;
    height: 25rem;

    margin-top: 3rem;
    margin-left: 2.3125rem;

    flex-grow: 0;
    transform: rotate(-180deg);

    background-color: ${({ theme }) => theme.colors.behance_gray500};
  }
`;

const StLeft = styled.article`
  width: 18.75rem;
  height: 25rem;
  margin: 3rem 0 0 1.875rem;

  color: ${({ theme }) => theme.colors.behance_white};

  & > img {
    width: 18.75rem;
    height: 12.5rem;
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;

    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_17};

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 6.125rem;
      height: 2.25rem;

      border: 1px solid transparent;
      border-radius: 6.25rem;

      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_14};
      color: ${({ theme }) => theme.colors.behance_white};
      background-color: ${({ theme }) => theme.colors.behance_gray700};

      & > p {
        margin-right: 0.5rem;
      }
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;

    margin-top: 1.25rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_17};
    & > p {
      margin-right: 0.25rem;
    }
  }
  & > div:nth-child(4) {
    display: flex;
    align-items: center;

    margin-top: 5.1875rem;

    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_14};

    & > p {
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.behance_gray500};
    }
  }
`;

const StRight = styled.div`
  display: flex;

  margin: -9.625rem 0 0 1.5rem;
  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};
  color: ${({ theme }) => theme.colors.behance_white};

  & > div {
    position: absolute;
    z-index: 3;
    float: right;

    width: 9.375rem;
    height: 24.25rem;
    margin-top: 10rem;
    margin-left: 87.625rem;

    background-image: linear-gradient(to left, black, transparent);
  }
`;

const StIconWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 4;

  width: 120rem;
  height: 5.625rem;

  margin: 15rem 0 0 91.375rem;
`;

const StArrowRight = styled(ArrowRight)`
  margin: 7rem 2.8125rem 0 0;
`;

const StHr = styled.section`
  display: flex;
  justify-content: flex-start;

  margin-top: 32.875rem;

  position: absolute;
  z-index: 2;

  & > hr:nth-child(1) {
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.behance_blue};
    position: absolute;
    z-index: 2;
    width: 30rem;
    height: 0.125rem;
    margin: 0;
  }
  & > hr:nth-child(2) {
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.behance_white};
    width: 120rem;
    height: 0.125rem;
    margin: 0;
  }
`;
