import { useSelector } from 'react-redux';

import ConfigurationStart from './configurationStart/ConfigurationStart';
import ConfigurationLayout from './configurationLayout/ConfigurationLayout';

import './configurationPage.scss';

const ConfigurationPage = () => {
  const { configurationPage } = useSelector(state => state);

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return <ConfigurationStart />
      case 2:
        return <ConfigurationLayout />
      default: 
        return null;
    }
  }

  const PageView = renderPage(configurationPage);
  
  return (
    <>
      {PageView}
    </>
  );
};



export default ConfigurationPage;