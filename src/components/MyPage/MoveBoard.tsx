import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICEdit, ICLockOn } from '../../asset/icon';
import { ImgMoveBoardShadow } from '../../asset/image';
import ImgMoveBoard from '../../asset/image/./사진.svg';
import ImgProfile from '../../asset/image/Profile.svg';

interface ImoveBoard {
  title: string;
  category: string;
  lock: boolean;
  profileNum: number;
}

const MoveBoard = () => {
  const [hoverTarget, setHoverTarget] = useState('');
  const navigate = useNavigate();

  const moveBoardList: ImoveBoard[] = [
    { title: 'Feature design', category: '산업 디자인', lock: true, profileNum: 3 },
    { title: 'Animation reference', category: '그래픽 디자인', lock: false, profileNum: 1 },
    { title: 'Financial reference', category: 'UI/UX', lock: false, profileNum: 1 },
    { title: 'AR glasses', category: '산업 디자인', lock: true, profileNum: 2 },
  ];

  //profile 렌더링 배열 생성
  const handleProfile = (profileNum: number) => {
    const array = [];
    for (let i = 0; i < profileNum; i++) {
      array.push(<StImg src={ImgProfile} className={`img${i}`} alt="유저 프로필" />);
    }
    return array;
  };

  //이벤트 핸들링
  const handleMousehover = (e: React.MouseEvent) => {
    setHoverTarget(e.currentTarget.id);
  };
  const handleMouseLeave = () => {
    setHoverTarget('');
  };
  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation;
    const moveBoardId = e.currentTarget.parentElement;
    console.log(moveBoardId);

    navigate(`/Edit`);
  };

  const moveBoard: JSX.Element[] = moveBoardList.map((obj, index) => (
    <StMoveBoard
      key={index}
      onMouseEnter={(e) => handleMousehover(e)}
      onMouseLeave={() => handleMouseLeave()}
      id={`moveBoard${index}`}>
      <img src={ImgMoveBoard} className="moveBoard" alt="무브 보드 썸네일" />
      <ImgMoveBoardShadow />

      <StHeader>
        <StTitleMoveBoard key={index}>{obj.title}</StTitleMoveBoard>
        {obj.lock === true ? <ICLockOn /> : null}
      </StHeader>

      <StHoverShadow className={hoverTarget === `moveBoard${index}` ? 'view' : ''} />
      <StEdit className={hoverTarget === `moveBoard${index}` ? 'view' : ''} onClick={(e) => handleOnClick(e)}>
        <ICEdit width="1rem" height="1rem" />
      </StEdit>

      <StCategoryMoveBoard key={index}>{obj.category}</StCategoryMoveBoard>
      {handleProfile(obj.profileNum)}
    </StMoveBoard>
  ));

  return <StContainer>{moveBoard}</StContainer>;
};

export default MoveBoard;

const StContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 1.375rem;

  width: 88.0625rem;

  padding: 0.375rem 0.875rem;
  margin-left: 31.9375rem;
`;

const StHeader = styled.div`
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

  & > img.moveBoard {
    position: absolute;
    z-index: -1;
  }
`;

const StImg = styled.img`
  position: absolute;
  bottom: 1.375rem;

  &.img0 {
    left: 1rem;
    z-index: 2;
  }
  &.img1 {
    left: 2.625rem;
    z-index: 1;
  }
  &.img2 {
    left: 4.1875rem;
    z-index: 0;
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
