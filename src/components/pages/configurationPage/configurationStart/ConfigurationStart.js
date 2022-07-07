import { useSelector, useDispatch } from 'react-redux';
import { setConfigurationPage, setSizeError} from './../../../../actions/index';

import NavStart from './../../../nav/navStart/NavStart';
import ConfigurationСhoice from './../../../configurationСhoice/ConfigurationСhoice';
import SizeInput from './../../../sizeInput/SizeInput';

import './configurationStart.scss';

const ConfigurationStart = () => {
  const { length, width, depth, height, apron, lengthB, configuration} = useSelector(state => state);
  const dispatch = useDispatch();

  const onSetPage = () => {
    if (!(length > 0) || !(width > 0) || !(depth > 0) || !(height > 0) || !(apron > 0) || (!(lengthB > 0) && configuration === 3))
      dispatch(setSizeError(true));
    else                
      dispatch(setConfigurationPage(2))
  }

  return (
    <>
      <NavStart onSetPage={onSetPage}/>
      <main>
        <section className="configuration-start">
          <div className="configuration-start__content _container">
            <ConfigurationСhoice />
            <SizeInput />
          </div>
        </section>
      </main>
    </>
  );
};

export default ConfigurationStart;