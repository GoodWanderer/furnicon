import Nav from '../Nav';

import { img01 } from '../../../resources/img/nav';
import './navStart.scss';

const NavStart = ({onSetPage}) => {
  return (
    <Nav>
      <div className="currentPositionPanel__row">
        <div className="currentPositionPanel__left">
          <img src={img01} alt="img" />
          <span>#001</span>
        </div>
        <div className="currentPositionPanel__right">
          <button 
            onClick={() => onSetPage()}
            className="currentPositionPanel__btn btn"
            >Далее</button>
        </div>
      </div>
    </Nav>
  );
};

export default NavStart;