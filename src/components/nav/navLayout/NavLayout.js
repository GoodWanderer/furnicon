import Nav from '../Nav';

import './navLayout.scss';

const NavLayout = ({onSetPage}) => {
  return (
    <Nav>
      <div className="currentPositionPanel__row">
        <div className="currentPositionPanel__left">
          <div className="currentPositionPanel__page active">макет</div>
          <div className="currentPositionPanel__page">дизайн</div>
          <div className="currentPositionPanel__page">расчет</div>
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

export default NavLayout;