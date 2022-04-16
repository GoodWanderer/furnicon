import { useSelector, useDispatch } from 'react-redux';
import { setConfigurationDefault } from '../../actions';

import { exitSvg } from './../../resources/img/configurationLayout';

const SizePlan = () => {
  const {width, length} = useSelector(state => state);
  const dispatch = useDispatch();

  const onPrevPage = () => {
    dispatch(setConfigurationDefault());
  }

  return (
    <div className="configuration-layout-plan__size configuration-layout-plan-size">
      {/* <div
        // onMouseMove={(e) => onChageSize(e)} 
        style={{width: `${width}px`}}
        className="configuration-layout-plan-size__w">
        <span className="text">{Math.round(width / 0.165 / 100) * 100}</span>
        <div className="arrow">
          <span></span>
          <span
            onMouseDown={(e) => onActiveWidthChange(e)}
            ></span>
        </div>
      </div> */}
      {/* <div className="configuration-layout-plan-size__h">
        <span>1000</span>
        <div className="arrow"></div>
      </div> */}
      <div className="configuration-layout-plan-size__item">
        <p className="configuration-layout-plan-size__title">Размер</p>
        <div 
          onClick={() => onPrevPage()}
          className="configuration-layout-plan-size__exit"><img src={exitSvg} alt="exit" /></div>
      </div>
      <div className="configuration-layout-plan-size__item">
        <p className="configuration-layout-plan-size__text">Ширина</p>
        <p className="configuration-layout-plan-size__text">{width} мм</p>
      </div>
      <div className="configuration-layout-plan-size__item">
        <p className="configuration-layout-plan-size__text">Поверхность</p>
        <p className="configuration-layout-plan-size__text">{length} мм</p>
      </div>
    </div>
  );
};

export default SizePlan;