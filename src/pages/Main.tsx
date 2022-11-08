import { ICNoriLogo } from '../asset/icon';
import ImgNoriLogo from '../asset/image/noriLogo.png';
const Main = () => {
  return (
    <div>
      Main
      <ICNoriLogo />
      <img src={ImgNoriLogo} alt="noriLogo" />
    </div>
  );
};

export default Main;
