import { useSelector, useDispatch } from 'react-redux';
import { setConfigurationMainPage } from '../../../actions';

import Button from './../../button/buttonMode/Button';
import Nav from '../Nav';

import './navLayout.scss';

const NavLayout = () => {
  const { configurationMainPage } = useSelector(state => state);
  const dispatch = useDispatch();

  const btnNext = configurationMainPage !== 2? <Button 
                                                  onClick={() => dispatch(setConfigurationMainPage(2))}
                                                  className="currentPositionPanel__btn btn"
                                                >Далее</Button> : null;
  
  return (
    <Nav>
      <div className="currentPositionPanel__row">
        <div className="currentPositionPanel__left">
          <div 
            onClick={() => dispatch(setConfigurationMainPage(1))}
            className={`currentPositionPanel__page ${configurationMainPage === 1 ?'active':''}`}>макет</div>
          <div
            onClick={() => dispatch(setConfigurationMainPage(2))} 
            className={`currentPositionPanel__page ${configurationMainPage === 2 ?'active':''}`}>расчет</div>
        </div>
        <div className="currentPositionPanel__right">
          {btnNext}
        </div>
      </div>
    </Nav>
  );
};

export default NavLayout;