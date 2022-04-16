import { equalSvg } from "../../../resources/img/header";
import './headerSub.scss'

const HeaderSub = () => {
  return (
    <div className="header-sub">
      <ul className="header-sub__row">
        <li className="header-sub__item"><a href="/" className="header-sub__link">
            <img src={equalSvg} alt="" />
            <span>Проект</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSub;