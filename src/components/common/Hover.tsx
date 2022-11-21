import { useState } from 'react';
import styled from 'styled-components';

import { EyeOff, Folder, ICClose, ICDropdown, ICGlass, ICOpenLink, ThumbsUp } from '../../asset/icon';
import ImgHomePreview from '../../asset/image/previewImg.png';
import Thumbnail from '../search/Thumbnail';

const Hover = () => {
  const [projectClicked, setprojectClicked] = useState(false);

  const handleProjectClick = () => {
    setprojectClicked(true);
  };
  const handleXClick = () => {
    setprojectClicked(false);
  };

  return (
    <>
      {projectClicked && (
        <StSimilarProjectWrapper>
          <StLeft>
            <div>
              <p>다음과 유사</p>
              <button type="button" onClick={handleXClick}>
                <p>지우기</p>
                <ICClose />
              </button>
            </div>
            <img src={ImgHomePreview} alt="썸네일 이미지" />
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
            <div></div>
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <Thumbnail key={idx} profileImg="" name="Wedge Studio" recommandCount={129} visibleCount={129} />
            ))}
          </StRight>
          <StHr>
            <hr />
            <hr />
          </StHr>
        </StSimilarProjectWrapper>
      )}

      <Container>
        <Button className="category">산업 디자인</Button>
        <Button className="eyeOffButton">
          <EyeOff />
        </Button>
        <p>KID CAM</p>
        <footer>
          <Button className="icGlass" onClick={handleProjectClick}>
            <Glass />
            <p>유사프로젝트</p>
          </Button>
          <Button className="folder">
            <Folder />
            <p>저장</p>
          </Button>
          <Button className="thumbsup">
            <ThumbsUp />
            <p>추천</p>
          </Button>
        </footer>
      </Container>
    </>
  );
};

export default Hover;

const Glass = styled(ICGlass)`
  margin-top: -0.25rem;
  margin-left: -0.25rem;
`;

const Container = styled.section`
  width: 21.25rem;
  height: 17.1875rem;
  margin-top: 2.5rem;

  border-radius: 0.3063rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.99) 100%);

  position: absolute;
  z-index: 2;
  
  & > p {
    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_14};
    color: ${({ theme }) => theme.colors.behance_white};
    margin-top: 10rem;
    margin-left: 1.1688rem;
  }
  & > footer {
    display: flex;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 0.8125rem 0.25rem 0.75rem;
  border: 1px solid transparent;
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_12};
  color: ${({ theme }) => theme.colors.behance_white};
  border-radius: 1.25rem;

  & .category {
    background-color: rgba(255, 255, 255, 0.3);
    margin-left: 0.75rem;
    margin-top: 0.75rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
  }
  & .eyeOffButton {
    margin-left: 11.6rem;
    background-color: rgba(255, 255, 255, 0.4);
  }
  & .icGlass {
    margin-left: 0.75rem;
    display: flex;
    text-align: center;

    background-color: rgba(255, 255, 255, 0.3);
    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
    & :hover {
      cursor: pointer;
    }
  }
  & .folder {
    margin-left: 5rem;
    display: flex;

    background-color: rgba(255, 255, 255, 0.3);
    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
  }
  & .thumbsup {
    margin-left: 0.5rem;
    display: flex;

    background-color: rgba(255, 255, 255, 0.3);
    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
  }
`;

const StSimilarProjectWrapper = styled.section`
  display: flex;

  position: absolute;
  z-index: 3;

  width: 120rem;
  height: 35rem;
  margin-left: -1.9rem;
  margin-bottom: 35rem;

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
  display: grid;
  grid-template-columns: repeat(5, 1fr);

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
