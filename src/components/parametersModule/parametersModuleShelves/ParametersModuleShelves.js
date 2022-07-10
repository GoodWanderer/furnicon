import {onSvg} from './../../../resources/img/parametersModule'

const ParametersModuleShelves = ({shelves, removableShelves, onSetShelves, onSetRemovableShelves}) => {
  
  return (
    <>
      <div className="parameters-Module-body__row m-16">
        <div className="parameters-Module-body__name">Количество полок</div>
        <div
          style={{margin: '8px 0 0'}} 
          className="parameters-Module-body__num">
          <input 
            value={shelves}
            onChange={(e) => onSetShelves(e.target.value)}
            min="0"
            max="5"
            type="number"
            className="parameters-Module-body__num-input" />
          <span className="parameters-Module-body__num-text">шт.</span>
        </div>
      </div>
      <div className="parameters-Module-body__checkbox">
        <div 
          onClick={() => onSetRemovableShelves()}
          className={`parameters-Module-body__checkbox-box ${removableShelves?'active':''}`}>
          <img src={onSvg} alt="Да" />
        </div>
        <div className="parameters-Module-body__checkbox-name">Съемная полка</div>
      </div>
    </>
  )
};

export default ParametersModuleShelves;