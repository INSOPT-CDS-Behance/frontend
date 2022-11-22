import { useState } from 'react';
import styled from 'styled-components';

import { HoverButton, ICInformation, ICLink, ICPicture, ICSave } from '../../asset/icon';

const DetailHover = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleMouseOver = () => {
    setIsMouseHover(true);
  };

  const handleMouseOut = () => {
    setIsMouseHover(false);
  };

  return (
    <StDetailHoverWrapper>
      {isMouseHover && <HoverButton />}
      <section>
        <StHoverButton type="button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <ICPicture />
          <p>기타유사항목</p>
        </StHoverButton>
        <button type="button">
          <ICSave />
          <p>저장</p>
        </button>
        <button type="button">
          <ICInformation />
          <p>정보</p>
        </button>
        <button type="button">
          <ICLink />
          <p>퍼머링크</p>
        </button>
      </section>
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

    /* width: 36rem; */
    & > button {
      display: flex;

      width: 10.375rem;
      padding: 1rem;

      border: 1px solid transparent;
      border-radius: 5rem;

      background: rgba(52, 52, 52, 0.7);
      color: white;
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
