import styled from 'styled-components';

import categoryImg from '../../asset/image/categoryImg.png';
import { CategoryList } from '../../types/common';

const Modal = () => {
  const categorylist: CategoryList[] = [
    { id: 1, title: '최고의 Behance', color: '#2456f7', imgSrc: '#' },
    { id: 2, title: '그래픽 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 3, title: '포토그래피', color: 'transparent', imgSrc: categoryImg },
    { id: 4, title: '일러스트레이션', color: 'transparent', imgSrc: categoryImg },
    { id: 5, title: '3D Art', color: 'transparent', imgSrc: categoryImg },
    { id: 6, title: 'UI/UX', color: 'transparent', imgSrc: categoryImg },
    { id: 7, title: '모션', color: 'transparent', imgSrc: categoryImg },
    { id: 8, title: '건축', color: 'transparent', imgSrc: categoryImg },
    { id: 9, title: '제품 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 10, title: '패션', color: 'transparent', imgSrc: categoryImg },
    { id: 11, title: '광고', color: 'transparent', imgSrc: categoryImg },
    { id: 12, title: '미술', color: 'transparent', imgSrc: categoryImg },
    { id: 13, title: '공예', color: 'transparent', imgSrc: categoryImg },
    { id: 14, title: '게임 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 15, title: '사운드', color: 'transparent', imgSrc: categoryImg },
    { id: 16, title: 'Creative Challenges', color: 'transparent', imgSrc: categoryImg },
    { id: 17, title: '모든 프로젝트', color: 'transparent', imgSrc: categoryImg },
  ];

  return (
    <StModalWrapper>
      <StModal>
        <p>최고의 크리에이티브 분야로 이루어진 갤러리</p>
        <div>
          {categorylist.map(({ id, color, imgSrc, title }) => (
            <button type="button" key={id} style={{ backgroundColor: color, backgroundImage: `url(${imgSrc})` }}>
              {title}
            </button>
          ))}
        </div>
      </StModal>
    </StModalWrapper>
  );
};

export default Modal;

const StModalWrapper = styled.section`
  position: absolute;
  z-index: 4;

  top: 0;
  left: 0;

  width: 120rem;
  height: 500rem;

  background-color: rgba(0, 0, 0, 0.5);
`;

const StModal = styled.article`
  width: 80.375rem;
  height: 34.1875rem;
  padding: 3.5rem 2.75rem;
  margin: 22.5625rem 0 0 33.0625rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.behance_white};
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.25);

  & > p {
    margin-bottom: 1.25rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    list-style: none;

    width: 74.875rem;
  }

  & > div > button {
    width: 14.375rem;
    height: 5.625rem;
    list-style-type: none;

    margin: 0 0.75rem 0.75rem 0;

    border: 1px solid transparent;
    border-radius: 0.25rem;

    ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
    color: ${({ theme }) => theme.colors.behance_white};
  }
`;
