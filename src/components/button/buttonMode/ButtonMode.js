import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModulesSelectedUp, setCurrentModuleSelected, setModulesSelectedUp2, setWall } from './../../../actions/index';

import { img07, img08 } from './../../../resources/img/configurationLayout';

const ButtonMode = () => {
  // const { depth, modulesSelectedUp, modulesSelectedUp2, currentModuleSelected, currentModuleSelectedListNum, configuration } = useSelector(state => state);
  // const dispatch = useDispatch();

  // const onSetDepth = (depth) => {
  //   if (currentModuleSelected?.id && currentModuleSelected?.type !== 'down') {
  //     dispatch(setCurrentModuleSelected({...currentModuleSelected, depth}))
  //     if (currentModuleSelectedListNum === 1) {
  //       dispatch(setModulesSelectedUp(
  //         [...modulesSelectedUp.map((item) => {
  //           if (item.id === currentModuleSelected?.id) {
  //             return {...item, depth}
  //           }
  //           return item
  //         })]
  //       ));
  //     } else {
  //       dispatch(setModulesSelectedUp2(
  //         [...modulesSelectedUp2.map((item) => {
  //           if (item.id === currentModuleSelected?.id) {
  //             return {...item, depth}
  //           }
  //           return item
  //         })]
  //       ));
  //     }
  //   }
  // } 

  return (
    <div className="configuration-layout-choise">
      <div className="configuration-layout-choise__content _container">
        <div className="configuration-layout-choise__row">
          {/* <div className="configuration-layout-choise__item">
            <h3 className="configuration-layout-choise__title">Глубина</h3>
            <ul className={`configuration-layout-choise__list ${currentModuleSelected?.modeles?.up3?'active':''}`}>
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
          </div> */}
          <Mezzanine />
          <Walls />
        </div>
      </div>
    </div>
  );
};

const Mezzanine = () => {
  const { modulesSelectedUp, modulesSelectedUp2, currentModuleSelected, wall } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const onSetMounted = (mounted) => {
    if (currentModuleSelected?.id && mounted !== currentModuleSelected?.mounted && currentModuleSelected?.type !== 'down' && currentModuleSelected?.type !== 'middle' && currentModuleSelected?.type !== 'middle-up') {
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
      if (wall === 1) {
        dispatch(setModulesSelectedUp(
          [...modulesSelectedUp.map((item) => {
            if (item.id === currentModuleSelected?.id) {
              return {...item, mounted, modeles: obj}
            }
            return item
          })]
        ));
      } else {
        dispatch(setModulesSelectedUp2(
          [...modulesSelectedUp2.map((item) => {
            if (item.id === currentModuleSelected?.id) {
              return {...item, mounted, modeles: obj}
            }
            return item
          })]
        ));
      }
    }
  } 

  return (
    <div className="configuration-layout-choise__item">
      <h3 className="configuration-layout-choise__title">Антресоль</h3>
      <ul className={`configuration-layout-choise__list ${currentModuleSelected?.modeles?.up3?'active':''}`}>
        {/* <li 
          onClick={() => onSetMounted('x2')}
          className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x2'?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img06} alt="img1" /></div>
          <p className="configuration-layout-choise__name">X2</p>
        </li> */}
        <li 
          onClick={() => onSetMounted('x1')}
          className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x1'?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img07} alt="img2" /></div>
          <p className="configuration-layout-choise__name">Да</p>
        </li>
        <li 
          onClick={() => onSetMounted('x0')}
          className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x0'?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img08} alt="img2" /></div>
          <p className="configuration-layout-choise__name">Нет</p>
        </li>
      </ul>
    </div>
  )
}

const Walls = () => {
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

export default ButtonMode;