import { useSelector, useDispatch } from 'react-redux';
import { setConfiguration } from './../../actions/index';

import { img01, img02, img03, img01Active, img02Active, img03Active} from './../../resources/img/configurationStart';

const ConfigurationСhoice = () => {
  const { configuration } = useSelector(state => state);
  const dispatch = useDispatch();

  const onSetConfiguration = (num) => {
    dispatch(setConfiguration(num))
  } 
    
  return (
    <>
      <h1 className="configuration-start__title">Выберите конфигурацию</h1>
      <div className="configuration-start__list">
        <div 
          onClick={() => onSetConfiguration(1)}
          className={`configuration-start__item ${configuration===1?'active':''}`}>
          <div className="configuration-start__img">
            <img src={configuration===1?img01Active:img01} alt="img01" />
          </div>
          <p className="configuration-start__name">Прямая</p>
        </div>
        <div 
          onClick={() => onSetConfiguration(2)}
          className={`configuration-start__item ${configuration===2?'active':''}`}
          >
          <div className="configuration-start__img">
            <img src={configuration===2?img02Active:img02} alt="img02" />
          </div>
          <p className="configuration-start__name">Паралельная</p>
        </div>
        <div 
          onClick={() => onSetConfiguration(3)}
          className={`configuration-start__item ${configuration===3?'active':''}`}
          >
          <div className="configuration-start__img">
            <img src={configuration===3?img03Active:img03} alt="img03" />
          </div>
          <p className="configuration-start__name">Угловая</p>
        </div>
        <div 
          onClick={() => onSetConfiguration(4)}
          className={`configuration-start__item ${configuration===4?'active':''}`}
          >
          <div className="configuration-start__img configuration-start-center_img">
            <img src={configuration===4?img01Active:img01} alt="img04" />
          </div>
          <p className="configuration-start__name">Островок</p>
        </div>
      </div>
    </>
  );
};

export default ConfigurationСhoice;