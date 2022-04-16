import { useSelector, useDispatch } from 'react-redux';
import { setModulesSelected, setCurrentModuleSelected } from './../../../actions/index';

import { img01, img02, img06, img07, img08} from './../../../resources/img/configurationLayout';

const ButtonMode = () => {
  const { depth, modulesSelected, currentModuleSelected } = useSelector(state => state);
  const dispatch = useDispatch();

  const onSetDepth = (depth) => {
    if (currentModuleSelected?.id) {
      dispatch(setCurrentModuleSelected({...currentModuleSelected, depth}))
      dispatch(setModulesSelected(
        [...modulesSelected.map((item) => {
          if (item.id === currentModuleSelected?.id) {
            return {...item, depth}
          }
          return item
        })]
      ));
    }
  } 
  
  const onSetMounted = (mounted) => {
    if (currentModuleSelected?.id && mounted !== currentModuleSelected?.mounted) {
      let obj = {};
      if (mounted === 'x2') {
        let up1 = currentModuleSelected.modeles.up1 ? currentModuleSelected.modeles.up1 : {};
        obj = {...currentModuleSelected.modeles, up1, up2: {}}
      }
      else if (mounted === 'x1') {
        let up1 = currentModuleSelected.modeles.up1 ? currentModuleSelected.modeles.up1 : {};
        obj = {...currentModuleSelected.modeles, up1: up1, up2: false}
      }
      else      
        obj = {...currentModuleSelected.modeles, up1: false, up2: false}
      dispatch(setCurrentModuleSelected({...currentModuleSelected, mounted, modeles: obj}))
      dispatch(setModulesSelected(
        [...modulesSelected.map((item) => {
          if (item.id === currentModuleSelected?.id) {
            return {...item, mounted, modeles: obj}
          }
          return item
        })]
      ));
    }
  } 

  return (
    <div className="configuration-layout-choise">
      <div className="configuration-layout-choise__content _container">
        <div className="configuration-layout-choise__row">
          <div className="configuration-layout-choise__item">
            <h3 className="configuration-layout-choise__title">Глубина</h3>
            <ul className={`configuration-layout-choise__list ${currentModuleSelected?.id?'active':''}`}>
              <li 
                onClick={() => onSetDepth('full')}
                className={`configuration-layout-choise__list-item ${currentModuleSelected?.depth==='full'?'active':''}`}
                >
                <div className="configuration-layout-choise__img"><img src={img02} alt="img1" /></div>
                <p className="configuration-layout-choise__name">D{depth}</p>
              </li>
              <li 
                onClick={() => onSetDepth('half')}
                className={`configuration-layout-choise__list-item ${currentModuleSelected?.depth==='half'?'active':''}`}
                >
                <div className="configuration-layout-choise__img"><img src={img01} alt="img2" /></div>
                <p className="configuration-layout-choise__name">D{depth/2}</p>
              </li>
            </ul>
          </div>
          <div className="configuration-layout-choise__item">
            <h3 className="configuration-layout-choise__title">Навесные шкафы</h3>
            <ul className={`configuration-layout-choise__list ${currentModuleSelected?.id?'active':''}`}>
              <li 
                onClick={() => onSetMounted('x2')}
                className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x2'?'active':''}`}
                >
                <div className="configuration-layout-choise__img"><img src={img06} alt="img1" /></div>
                <p className="configuration-layout-choise__name">X2</p>
              </li>
              <li 
                onClick={() => onSetMounted('x1')}
                className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x1'?'active':''}`}
                >
                <div className="configuration-layout-choise__img"><img src={img07} alt="img2" /></div>
                <p className="configuration-layout-choise__name">X1</p>
              </li>
              <li 
                onClick={() => onSetMounted('x0')}
                className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x0'?'active':''}`}
                >
                <div className="configuration-layout-choise__img"><img src={img08} alt="img2" /></div>
                <p className="configuration-layout-choise__name">None</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonMode;