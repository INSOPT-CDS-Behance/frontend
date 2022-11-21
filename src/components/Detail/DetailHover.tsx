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
        <StHoverButton onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <ICPicture />
          <p>기타유사항목</p>
        </StHoverButton>
        <div>
          <ICSave />
          <p>저장</p>
        </div>
        <div>
          <ICInformation />
          <p>정보</p>
        </div>
        <div>
          <ICLink />
          <p>퍼머링크</p>
        </div>
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
    & > div {
      display: flex;

      width: 10.375rem;
      padding: 1rem;

      border: 1px solid transparent;
      border-radius: 5rem;

      background: rgba(52, 52, 52, 0.7);
      color: white;
    }
  }
  /* & > section:nth-child(2) {
    position: fixed;
    margin-top: 1rem;
    /* z-index: 4; */
  } */
`;

const StHoverButton = styled.div`
  display: flex;

  width: 10.375rem;
  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 5rem;

  background: rgba(52, 52, 52, 0.7);
  color: white;
`;
