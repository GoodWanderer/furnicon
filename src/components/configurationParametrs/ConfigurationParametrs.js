
import ConfigurationParametrsMezzanine from './configurationParametrsMezzanine/ConfigurationParametrsMezzanine';
import ConfigurationParametrsWalls from './configurationParametrsWalls/ConfigurationParametrsWalls';
import ConfigurationParametrsSettings from './configurationParametrsSettings/СonfigurationParametrsSettings';

const ConfigurationParametrs = () => {
  return (
    <div className="configuration-layout-choise">
      <div className="configuration-layout-choise__content _container">
        <div className="configuration-layout-choise__row">
          <ConfigurationParametrsMezzanine />
          <ConfigurationParametrsWalls />
          <ConfigurationParametrsSettings />
        </div>
      </div>
    </div>
  );
};

export default ConfigurationParametrs;