import { equalSvg } from "../../../resources/img/header";
import { arrowRigth } from "../../../resources/img/header";
import './headerSub.scss'

const HeaderSub = () => {
  return (
    <div className="header-sub">
      <ul className="header-sub__row">
        <li className="header-sub__item"><a href="/" className="header-sub__link">
            <img src={equalSvg} alt="" />
            <span>Проект</span>
            <img src={arrowRigth} alt="" />
            <span>Прямая</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSub;