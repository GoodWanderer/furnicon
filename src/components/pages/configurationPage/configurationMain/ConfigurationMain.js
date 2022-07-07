import { useSelector } from 'react-redux';

import NavLayout from './../../../nav/navLayout/NavLayout';
import ConfigurationLayout from './../configurationLayout/ConfigurationLayout';
import ConfigurationCalc from './../configurationCalc/ConfigurationCalc';

const ConfigurationMain = () => {
  const {configurationMainPage} = useSelector(state => state);

  const content = configurationMainPage === 1 ? <ConfigurationLayout /> : <ConfigurationCalc />;

  return (
    <>
      <NavLayout />
      {content}
    </>
  );
};

export default ConfigurationMain;