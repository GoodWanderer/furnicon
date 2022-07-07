import { profileSvg } from "../../../resources/img/header";
import './headerMain.scss';

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="header-main__left">
        <a href="/" className="header-main__logo">Furnicom Builder</a>
      </div>
      <nav className="header-main__right">
        <ul className="header-main__list">
          <li className="header-main__item"><a href="/" className="header-main__link">Проекты</a></li>
          <li className="header-main__item"><a href="/" className="header-main__link">Шаблоны</a></li>
          <li className="header-main__item"><a href="/" className="header-main__link">
            <img src={profileSvg} alt="profile" /><span>Арман</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMain;