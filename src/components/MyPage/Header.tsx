import styled from 'styled-components';

import { ImgHeaderBackground } from '../../asset/image';

const Header = () => {
  return (
    <>
      <StHeader /> {/* 임시 Header -> common/Header component 불러오기 */}
      <ImgHeaderBackground />
    </>
  );
};

export default Header;

const StHeader = styled.div`
  position: absolute;
  z-index: 1;

  width: 120rem;
  height: 4.375rem;

  border: 0.0625rem solid black;
`;
