import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { HoverButton, ICInformation, ICLink, ICPicture, ICSave } from '../../asset/icon';
import { detailhover2Clicked } from '../../utils/atoms';

const DetailHover = () => {
  // const [isDetailHover, setIsDetailHover] = useState<boolean>(false);
  const [isDetailHover, setIsDetailHover] = useRecoilState<boolean>(detailhover2Clicked);

  const handleMouseOver = () => {
    setIsDetailHover((prev) => !prev);
    console.log('second ' + isDetailHover);
  };

  return (
    <StDetailHoverWrapper>
      <section>
        <StHoverButton type="button" className="etc" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
          <ICPicture />
          <p>기타유사항목</p>
        </StHoverButton>
        <button type="button" className="save">
          <ICSave />
          <p>저장</p>
        </button>
        <button type="button" className="inform">
          <ICInformation />
          <p>정보</p>
        </button>
        <button type="button" className="link">
          <ICLink />
          <p>퍼머링크</p>
        </button>
      </section>
      {isDetailHover && <HoverButton />}
      <StHoverIcon className="hovericon" />
    </StDetailHoverWrapper>
  );
};

export default DetailHover;

const StDetailHoverWrapper = styled.nav`
  position: fixed;
  z-index: 3;

  margin: 2.0625rem 0 0 15.875rem;

  & > section:nth-child(1) {
    display: flex;
    justify-content: space-around;

    & > button {
      display: flex;
      align-items: center;

      height: 2.5rem;

      margin: 0 0.75rem 0.3125rem 0;
      padding: 0.5rem 0.5rem 0.5rem 1.125rem;

      border: 1px solid transparent;
      border-radius: 5rem;

      background: rgba(52, 52, 52, 0.7);
      color: ${({ theme }) => theme.colors.behance_white};

      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};

      & > p {
        margin-left: 0.5rem;
      }
    }

    & > button.etc {
      width: 10.375rem;
    }
    & > button.save {
      width: 6.4375rem;
    }
    & > button.inform {
      width: 6.4375rem;
    }
    & > button.link {
      width: 8rem;
    }
  }
`;

const StHoverButton = styled.button`
  display: flex;

  width: 10.375rem;
  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 5rem;

  background: rgba(52, 52, 52, 0.7);
  color: white;
`;

const StHoverIcon = styled(HoverButton)`
  visibility: hidden;
`;
