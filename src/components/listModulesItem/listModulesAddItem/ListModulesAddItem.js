

const ListModulesAddItem = ({classNameType, onAddModulesSelected}) => {

  return (
    <div
      className={`configuration-layout-plan-selected__item-w-${classNameType} add`}>
      <div
        onClick={() => onAddModulesSelected()}  
        className={`configuration-layout-plan-selected__text`}>
        +
      </div>
    </div>
  );
};

export default ListModulesAddItem;