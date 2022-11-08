import { ICNoriLogo } from '../asset/icon';
import ImgNoriLogo from '../asset/image/noriLogo.png';
import { Header } from '../components/Main';
const Main = () => {
  return (
    <div>
      <Header />
      Main
      <ICNoriLogo />
      <img src={ImgNoriLogo} alt="noriLogo" />
    </div>
  );
};

export default Main;
