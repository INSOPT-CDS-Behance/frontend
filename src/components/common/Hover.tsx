import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { EyeOff, Folder, ICClose, ICDropdown, ICGlass, ICOpenLink, ThumbsUp } from '../../asset/icon';
import modalClicked from '../../atom/projectClicked';

const Hover = () => {
  const [projectClicked, setprojectClicked] = useRecoilState<boolean>(modalClicked);

  const handleProjectClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setprojectClicked((prev) => !prev);
    console.log(projectClicked);
  };

  return (
    <>
      <StHoverWrapper>
        <button type="button" className="category">
          산업디자인
        </button>
        <button type="button" className="eyeOffButton">
          <EyeOff />
        </button>
        <p>KID CAM</p>
        <footer>
          <button
            type="button"
            className="icGlass"
            onClick={(e: React.MouseEvent<HTMLElement>) => handleProjectClick(e)}>
            <Glass />
            <p>유사프로젝트</p>
          </button>
          <button type="button" className="folder">
            <Folder />
            <p>저장</p>
          </button>
          <button type="button" className="thumbsup">
            <ThumbsUp />
            <p>추천</p>
          </button>
        </footer>
      </StHoverWrapper>
    </>
  );
};

export default Hover;

const Glass = styled(ICGlass)`
  margin-top: -0.25rem;
  margin-left: -0.25rem;
`;

const StHoverWrapper = styled.section`
  width: 21.25rem;
  height: 17.1875rem;
  margin-top: -2.5rem;

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

    & > button {
      padding: 0.5rem 0.8125rem 0.25rem 0.75rem;
      border: 1px solid transparent;
      ${({ theme }) => theme.fonts.behance_acumin_pro_regular_12};
      color: ${({ theme }) => theme.colors.behance_white};
      border-radius: 1.25rem;
    }

    & button.icGlass {
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
    & button.folder {
      margin-left: 5rem;
      display: flex;

      background-color: rgba(255, 255, 255, 0.3);
      & > p {
        margin-left: 0.25rem;
        margin-top: -0.1rem;
      }
    }
    & button.thumbsup {
      margin-left: 0.5rem;
      display: flex;

      background-color: rgba(255, 255, 255, 0.3);
      & > p {
        margin-left: 0.25rem;
        margin-top: -0.1rem;
      }
    }
  }

  & > button {
    padding: 0.5rem 0.8125rem 0.25rem 0.75rem;
    border: 1px solid transparent;
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_12};
    color: ${({ theme }) => theme.colors.behance_white};
    border-radius: 1.25rem;
  }

  & button.category {
    background-color: rgba(255, 255, 255, 0.3);
    margin-left: 0.75rem;
    margin-top: 0.75rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
  }
  & button.eyeOffButton {
    margin-left: 11.6rem;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
