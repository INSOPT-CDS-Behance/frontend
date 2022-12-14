import styled from 'styled-components';

import { ICRecommand, ICVisible } from '../../asset/icon';
import { ThumbnailProps } from '../../types/common';

const Thumbnail = (props: ThumbnailProps) => {
  const { previewData } = props;
  const { profileImg, name, recommandCount, visibleCount } = previewData;

  return (
    <StContentPreviewWrapper>
      <img src={profileImg} alt="thumbnail" width={'21.25rem'} height={'17.1875rem'} />
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

export default Thumbnail;

const StContentPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* width: 21.25rem; */
  margin-top: 2.5rem;
  margin-right: 1.5rem;

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

      color: ${({ theme }) => theme.colors.behance_white};
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
      color: ${({ theme }) => theme.colors.behance_white};
    }

    span {
      margin-left: 0.3438rem;

      color: ${({ theme }) => theme.colors.behance_gray600};
      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_12};
    }
  }
`;
