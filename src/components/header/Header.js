import MainHeader from './headerMain/HeaderMain';
import SubHeader from './headerSub/HeaderSub';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content _container">
        <MainHeader />
        <SubHeader />
      </div>
    </header>
  );
};

export default Header;