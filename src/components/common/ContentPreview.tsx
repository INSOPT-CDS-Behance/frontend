import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ICRecommand, ICVisible } from '../../asset/icon';
import { ContentPrviewData, LikeStatus } from '../../types/common';
import { PostProjectLike } from '../../types/project';
import { postProjectLike } from '../../utils/lib/project';
import Hover from '../Home/Hover';

interface ContentPreviewProps {
  contentPrviewData: ContentPrviewData;
  isHomePage: boolean;
}
const ContentPreview = (props: ContentPreviewProps) => {
  const { contentPrviewData, isHomePage } = props;
  const { projectId, profileImg, name, recommandCount, visibleCount } = contentPrviewData;

  const [likeCount, setLikeCount] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    setLikeCount(recommandCount);
  }, []);

  const handleHover = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };

  const postLike = async () => {
    try {
      const postBody: PostProjectLike = { projectId, userId: 2 };
      const { data } = await postProjectLike(postBody);
      const { status, message } = data as LikeStatus;
      if (status) {
        switch (message) {
          case '좋아요 취소 성공':
            setLikeCount(likeCount - 1);
            break;
          case '좋아요 성공':
            setLikeCount(likeCount + 1);
            break;
        }
      }
    } catch (e) {}
  };
  return (
    <StContentPreviewWrapper onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
      <img src={profileImg} alt="thumbnail" width={'21.25rem'} height={'17.1875rem'} />
      {isHomePage && isHover && <Hover />}
      <StContentInfoWrapper>
        <p className="info_user">
          <img src={profileImg} alt="user_profile" />
          <span>{name}</span>
        </p>
        <div className="reaction">
          <p role="presentation" onClick={postLike} className="reaction__recommand">
            <ICRecommand fill={'#5d5d5d'} width="16" height="16" />
            <span>{likeCount}</span>
          </p>
          <p role="presentation" onClick={postLike} className="reaction__visible">
            <ICVisible fill={'#5d5d5d'} width="16" height="16" />
            <span>{visibleCount}</span>
          </p>
        </div>
      </StContentInfoWrapper>
    </StContentPreviewWrapper>
  );
};

export default ContentPreview;

const StContentPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 21.25rem;
  margin-top: 3rem;

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
