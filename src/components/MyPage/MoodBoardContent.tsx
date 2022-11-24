import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICEdit, ICLockOn } from '../../asset/icon';
import { ImgMoveBoardShadow } from '../../asset/image';
import ImgProfile from '../../asset/image/Profile.svg';
import { MoodBoardData } from '../../types/mypage';
import Tolltip from './Tolltip';

interface MoodBoardDataProps {
  MoodBoardData: MoodBoardData;
  setHovered: Dispatch<SetStateAction<boolean>>;
  hoveredLong: boolean;
}

const MoodBoardContent = (props: MoodBoardDataProps) => {
  const { MoodBoardData, setHovered, hoveredLong } = props;
  const { id, title, category, lock, profileNum, project } = MoodBoardData;
  const navigate = useNavigate();

  const [hoverTarget, setHoverTarget] = useState<string>('');
  //profile 렌더링 배열 생성
  const handleProfile = (profileNum: number) => {
    const array = [];
    for (let i = 0; i < profileNum; i++) {
      array.push(<StImg src={ImgProfile} className={`img${i}`} alt="유저 프로필" />);
    }
    return array;
  };

  const handleMousehover = (e: React.MouseEvent) => {
    setHoverTarget(e.currentTarget.id);
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHoverTarget('');
    setHovered(false);
  };

  //이벤트 핸들링
  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation;

    navigate(`/Edit/${id}`, { state: { title, subtitle: category, lock } });
  };

  return (
    <StMoveBoard onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave} id={`moveBoard${id}`}>
      <StImgContainer>
        {[0, 1, 2, 3].map((data) => (
          <img src={project[data].image} key={data} className="moveBoard" alt="무브 보드 썸네일" />
        ))}
      </StImgContainer>
      <ImgMoveBoardShadow />

      <StHeader>
        <StTitleMoveBoard key={id}>{title}</StTitleMoveBoard>
        {lock === true && <ICLockOn />}
      </StHeader>

      <StHoverShadow className={hoverTarget === `moveBoard${id}` ? 'view' : ''} />
      <StEdit className={hoverTarget === `moveBoard${id}` ? 'view' : ''} onClick={(id) => handleOnClick(id)}>
        <ICEdit width="1rem" height="1rem" />
      </StEdit>

      <StCategoryMoveBoard key={id}>{category}</StCategoryMoveBoard>
      {hoveredLong && hoverTarget === `moveBoard${id}` && <Tolltip moveBoardId={id} />}
      {handleProfile(profileNum)}
    </StMoveBoard>
  );
};

export default MoodBoardContent;

const StHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.4375rem;

  position: absolute;
  z-index: 1;
  top: 1.375rem;
  left: 1.0625rem;
`;

const StMoveBoard = styled.article`
  position: relative;
`;

const StImgContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 26.875rem;
  height: 21.125rem;

  position: absolute;
  z-index: -1;

  & > img {
    width: 13.4375rem;
    height: 10.5625rem;
  }
`;

const StTitleMoveBoard = styled.h1`
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18}
`;

const StCategoryMoveBoard = styled.h2`
  position: absolute;
  top: 3.0625rem;
  left: 1.0625rem;

  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14}
`;

/****** hover시 나타나는 요소들 ******/
const StEdit = styled.button`
  &.view {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.8125rem;
    right: 0.75rem;
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.behance_white};
    cursor: pointer;
  }
  display: none;
`;

const StHoverShadow = styled.div`
  &.view {
    position: absolute;
    left: 0;
    top: 0;
    width: 26.875rem;
    height: 21.125rem;
    background-color: ${({ theme }) => theme.colors.behance_black};
    opacity: 0.5;
  }
`;

const StImg = styled.img`
  position: absolute;
  bottom: 1.375rem;

  &.img0 {
    left: 1rem;
    z-index: 3;
  }
  &.img1 {
    left: 2.625rem;
    z-index: 2;
  }
  &.img2 {
    left: 4.1875rem;
    z-index: 1;
  }
  &.img3 {
    left: 5.75rem;
    z-index: 0;
  }
`;
