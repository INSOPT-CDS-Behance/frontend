import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BtnNext, BtnPrev, HoverButton } from '../asset/icon';
import ImgScroll from '../asset/image/img_scroll.png';
import BottomIcon from '../components/Detail/BottomIcon';
import DetailBlackHeader from '../components/Detail/DetailBlackHeader';
import DetailHover from '../components/Detail/DetailHover';
import DetailWhiteHeader from '../components/Detail/DetailWhiteHeader';
import RightIcon from '../components/Detail/RightIcon';
import { DetailData } from '../types/project';
import { getProjectId } from '../utils/lib/project';

const Detail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userId, setUserId] = useState(state.id);

  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [pageY, setPageY] = useState<number>(0);
  const documentRef = useRef(document);
  const [progress, setProgress] = useState<number>(0);

  const [isDetailHover, setIsDetailHover] = useState<boolean>(false);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setProgress(pageY / 60);
    setIsSpread(pageYOffset <= 350);
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover((prev) => !prev);
  };

  const hadleButtonMouseOver = () => {
    setIsDetailHover((prev) => !prev);
  };

  const [scrollImg, setscrollImg] = useState<string>();

  useEffect(() => {
    const getContentList = async () => {
      const { data } = await getProjectId(`${userId}`);
      const getImgData = data.data.image;
      setscrollImg(getImgData);
    };

    getContentList();
  }, []);

  const handleNextPage = (id: number) => {
    setUserId(id + 1);
    navigate(`/search/${userId}`, { state: { id: userId } });
  };

  const handlePrevPage = (id: number) => {
    setUserId(id - 1);
    navigate(`/search/${userId}`, { state: { id: userId } });
  };

  return (
    <StDetailWrapper>
      <StHeaderWrapper>
        {isSpread ? (
          <DetailBlackHeader />
        ) : (
          <>
            <DetailWhiteHeader />
            <StProgressBar progress={progress}>
              <div></div>
            </StProgressBar>
          </>
        )}
      </StHeaderWrapper>
      <StBody>
        <RightIcon />
        <StButtonWrapper>
          <div>
            <BtnPrev onClick={() => handlePrevPage(userId)} />
            <p>이전</p>
          </div>
          <div>
            <BtnNext onClick={() => handleNextPage(userId)} />
            <p>다음</p>
          </div>
        </StButtonWrapper>
        {isHover && <DetailHover />}

        <StImgWrapper>
          <StImg src={scrollImg} alt="메인이미지" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} />
        </StImgWrapper>
      </StBody>
    </StDetailWrapper>
  );
};

export default Detail;

const StDetailWrapper = styled.section`
  width: 120rem;
`;

const StHeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  left: 0;
  right: 0;
  z-index: 5;
`;

const StProgressBar = styled.div<{ progress: number }>`
  width: 120rem;
  height: 0.3125rem;

  margin: 0;
  border-color: ${({ theme }) => theme.colors.behance_blue};

  & > div {
    width: ${({ progress }) => progress}rem;
    height: 0.3125rem;

    background-color: ${({ theme }) => theme.colors.behance_blue};
  }
`;

const StBody = styled.section`
  padding-top: 6.5rem;
`;

const StImg = styled.img`
  width: 91.375rem;
`;

const StImgWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};
`;

const StButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: fixed;
  z-index: 3;

  width: 120rem;
  padding: 0 1.875rem;

  margin-top: 50rem;

  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      margin-top: 0.9375rem;
    }
  }
`;
