import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setWall } from './../../../actions/index';

import { img08 } from './../../../resources/img/configurationLayout';

const ConfigurationParametrsWalls = () => {
  const { configuration, wall } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentModuleSelected(false))
  }, [wall])

  const wallRender = () => {
    return (
      <li 
        onClick={() => dispatch(setWall(2))}
        className={`configuration-layout-choise__list-item ${wall===2?'active':''}`}
        >
        <div className="configuration-layout-choise__img"><img src={img08} alt="img2" /></div>
        <p className="configuration-layout-choise__name">B</p>
      </li>
    )
  }

  const wallView = configuration === 2 || configuration === 3 ? wallRender() : null;

  return (
    <div className="configuration-layout-choise__item">
      <h3 className="configuration-layout-choise__title">Стена</h3>
      <ul className={`configuration-layout-choise__list active`}>
        <li 
          onClick={() => dispatch(setWall(1))}
          style={{cursor: configuration === 2 || configuration === 3 ? 'pointer' : 'default'}}
          className={`configuration-layout-choise__list-item ${wall===1?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img08} alt="img1" /></div>
          <p className="configuration-layout-choise__name">A</p>
        </li>
        {wallView}
      </ul>
    </div>
  )
} 

export default ConfigurationParametrsWalls;