import styled from 'styled-components';

import { ICRecommand, ICVisible } from '../../asset/icon';
import ImgHomePreview from '../../asset/image/previewImg.png';
import { ContentPrivewData } from '../../types/common';

const ContentPreview = (props: ContentPrivewData) => {
  const { profileImg, name, recommandCount, visibleCount } = props;

  return (
    <StContentPreviewWrapper>
      <img src={ImgHomePreview} alt="thumbnail" width={'21.25rem'} height={'17.1875rem'} />
      <StContentInfoWrapper>
        <p className="info_user">
          <img src={ImgHomePreview} alt="user_profile" />
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

export default ContentPreview;

const StContentPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
