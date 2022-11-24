import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ICRecommand, ICVisible } from '../../asset/icon';
import ImgHomePreview from '../../asset/image/previewImg.png';
<<<<<<< HEAD
import { ContentPrviewData } from '../../types/common';

const Preview = (props: ContentPrviewData) => {
  const { profileImg, name, recommandCount, visibleCount } = props;
=======
import { ContentPreviewProps, PreviewData } from '../../types/common';
import Hover from '../common/Hover';

interface PreviewProps {
  contentPreview: ContentPreviewProps;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Preview = ({ contentPreview, handleClick }: PreviewProps) => {
  const { isHomePage, contentPreviewData } = contentPreview;
  const { projectId, profileImg, name, recommandCount, visibleCount } = contentPreviewData;

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808

  return (
    <StContentPreviewWrapper onMouseOver={handleHover} onMouseOut={handleHover} onClick={handleClick}>
      <img src={profileImg} alt="thumbnail" width={'21.25rem'} height={'17.1875rem'} />
      {isHomePage && isHover && <Hover />}
      <StContentInfoWrapper>
        <p className="info_user">
          <img src={profileImg} alt="user_profile" />
          <span>{name}</span>
        </p>
        <div className="reaction">
          <p className="reaction__recommand">
            <ICRecommand fill={'#5d5d5d'} width="16" height="16" />
            <span>{recommandCount}</span>
          </p>
          <p className="reaction__visible">
            <ICVisible fill={'#5d5d5d'} width="16" height="16" />
            <span>{visibleCount}</span>
          </p>
        </div>
      </StContentInfoWrapper>
    </StContentPreviewWrapper>
  );
};

export default Preview;

const StContentPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 21.25rem;
  margin-top: 2.5rem;

  & > img {
    width: 21.25rem;
    height: 17.1875rem;

    border-radius: 0.3081rem;
  }
`;
const StContentInfoWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-top: 0.75rem;

  & > p.info_user {
    display: flex;
    align-items: flex-end;

    img {
      width: 1.5rem;
      height: 1.5rem;

      border-radius: 0.75rem;
    }
    span {
      margin-left: 0.5rem;

      color: ${({ theme }) => theme.colors.behance_black};
      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};
    }
  }
  & > div.reaction {
    display: flex;

    gap: 0.75rem;

    & > p {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      margin-left: 0.3438rem;

      color: ${({ theme }) => theme.colors.behance_gray600};
      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_12};
    }
  }
`;
