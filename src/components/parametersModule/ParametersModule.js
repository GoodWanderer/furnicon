import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setModulesSelectedDown, setModulesSelectedDown2, setModulesSelectedMiddle, setModulesSelectedMiddle2 } from './../../actions/index';

import useResize from './../../service/Resize';

import ParametersModuleTechnic from './parametersModuleTechnic/ParametersModuleTechnic';
import ParametersModuleShelves from './parametersModuleShelves/ParametersModuleShelves';

import {closeSvg, selectSvg, onSvg} from './../../resources/img/parametersModule';

import './parametersModule.scss';

const ParametersModule = () => {
  const { currentModuleSelected } = useSelector(state => state);

  const parametersModuleView = currentModuleSelected ? <ParametersModuleView /> : null;

  return (
    <>
      {parametersModuleView}
    </>
  );
};

const ParametersModuleView = () => {
  const {currentModuleSelected, modulesSelectedDown, modulesSelectedDown2, modulesSelectedMiddle, modulesSelectedMiddle2, modulesCommon, wall} = useSelector(state => state);
  const dispatch = useDispatch();

  const {onResizeWidth} = useResize();

  const [widthItem, setWidthItem] = useState(currentModuleSelected.width); 
  const [heightItem, setHeightItem] = useState(currentModuleSelected.height); 
  const [depthItem, setDepthItem] = useState(currentModuleSelected.depth); 

  const [shelves, setShelves] = useState(currentModuleSelected.shelves); 
  const [removableShelves, setRemovableShelves] = useState(currentModuleSelected.removableShelves); 

  const [materialActive, setMaterialActive] = useState(0);

  const [material, setMeterial] = useState(currentModuleSelected.material);
  const [backWall, setBackWall] = useState(currentModuleSelected.backWall);

  const [edge, setEdge] = useState(currentModuleSelected.edge);
  const [front, setFront] = useState(currentModuleSelected.front);

  const [c, setC] = useState(false)

  useEffect(() => {
    setWidthItem(currentModuleSelected.width);
    setHeightItem(currentModuleSelected.height);
    setDepthItem(currentModuleSelected.depth);
    setMeterial(currentModuleSelected.material);
    setBackWall(currentModuleSelected.backWall);
    setMaterialActive(0)

    setShelves(currentModuleSelected.shelves);
    setRemovableShelves(currentModuleSelected.removableShelves);

    setEdge(currentModuleSelected.edge);
    setFront(currentModuleSelected.front);
  }, [
    currentModuleSelected.width,
    currentModuleSelected.height,
    currentModuleSelected.depth,
    currentModuleSelected.material,
    currentModuleSelected.backWall,
    currentModuleSelected.shelves,
    currentModuleSelected.removableShelves,
    currentModuleSelected.edge,
    currentModuleSelected.front
  ])

  const onSetWidthChange = (value) => {
    setWidthItem(value);
    onResizeWidth(value, true);
  }

  const onSetWidth = (code) => {
    if (code === 'Enter' || code === 'NumpadEnter') {
      setWidthItem(onResizeWidth(widthItem));
    }
  }
  const onSetHeightChange = (value) => {
    setHeightItem(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        height: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            height: value,
          }
        else {
          return el
        }
      })]
    ))
  }
  const onSetDepthChange = (value) => {
    setHeightItem(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        depth: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            depth: value,
          }
        else {
          return el
        }
      })]
    ))
  }
  const onSetShelves = (value) => {
    setShelves(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        shelves: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            shelves: value,
          }
        else {
          return el
        }
      })]
    ))
  } 
  const onSetRemovableShelves = () => {
    setRemovableShelves(RemovableShelves => RemovableShelves);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        removableShelves: !currentModuleSelected.removableShelves,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            removableShelves: !currentModuleSelected.removableShelves,
          }
        else {
          return el
        }
      })]
    ))
  } 
  const onSetMaterialActive = (value) => {
    if (materialActive === value && materialActive !== 0)
      setMaterialActive(0);
    else
      setMaterialActive(value);
  }
  const onSetMaterial = (value) => {
    onSetMaterialActive(0);
    setMeterial(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        material: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            material: value,
          }
        else {
          return el
        }
      })]
    ))
  }
  const onSetBackWall = (value) => {
    onSetMaterialActive(0);
    setBackWall(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        backWall: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            backWall: value,
          }
        else {
          return el
        }
      })]
    ))
  }

  const onSetModuleTest = (id) => {
    onSetMaterialActive(0);
    let newModule;
    if (id === 'start') {
      newModule = modulesCommon.find(module => module.id === currentModuleSelected.modeles.down.startId);
    } else {
      newModule = modulesCommon.find(module => module.id === id);
    }
    let down = {
      startId: currentModuleSelected.modeles.down.startId,
      id: newModule.id,
      img: newModule.img,
      activeImg: newModule.activeImg,
      replaceMax: newModule.replaceMax?newModule.replaceMax:null,
      replaceMin: newModule.replaceMin?newModule.replaceMin:null,
      indent: newModule.indent,
      appointment: newModule.appointment
    }
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected,
        width: newModule.id===7||newModule.id===8?600:currentModuleSelected.width, 
        modeles: {...currentModuleSelected.modeles, down},
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {...currentModuleSelected,
                    width: newModule.id===7||newModule.id===8?600:currentModuleSelected.width,
                    modeles: {...currentModuleSelected.modeles, down}
                  }
        else {
          return el
        }
      })
      ]
    ))
  } 
  
  const onSetEdge = (value) => {
    onSetMaterialActive(0);
    setEdge(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        edge: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            edge: value,
          }
        else {
          return el
        }
      })]
    ))
  }
  const onSetFront = (value) => {
    onSetMaterialActive(0);
    setFront(value);
    dispatch(setCurrentModuleSelected(
      {...currentModuleSelected, 
        front: value,
      }
    ))
    dispatch(setModulesSelectedDown(
      [...modulesSelectedDown.map((el) => {
        if (el.id === currentModuleSelected.id)
          return {
            ...currentModuleSelected, 
            front: value,
          }
        else {
          return el
        }
      })]
    ))
  }

  const parametersModuleShelves = currentModuleSelected?.modeles?.down?.id !== 7 && currentModuleSelected?.modeles?.down?.id !== 8 ?
                                  <ParametersModuleShelves 
                                    shelves={shelves} 
                                    removableShelves={removableShelves}
                                    onSetShelves={onSetShelves} 
                                    onSetRemovableShelves={onSetRemovableShelves}/>:null;

  const renderTechnic = () => {
    if (wall === 1) {
      return <ParametersModuleTechnic
        arrMiddle={modulesSelectedMiddle}
        updateArrFunctionMiddle={setModulesSelectedMiddle}
        arrDown={modulesSelectedDown}
        updateArrFunctionDown={setModulesSelectedDown}
        parametersModuleShelves={parametersModuleShelves}
        onSetMaterialActive={onSetMaterialActive}
        onSetModuleTest={onSetModuleTest} materialActive={materialActive}
        setMaterialActive={setMaterialActive}
      />
    } else {
      return <ParametersModuleTechnic
        arrMiddle={modulesSelectedMiddle2}
        updateArrFunctionMiddle={setModulesSelectedMiddle2}
        arrDown={modulesSelectedDown2}
        updateArrFunctionDown={setModulesSelectedDown2}
        parametersModuleShelves={parametersModuleShelves}
        onSetMaterialActive={onSetMaterialActive}
        onSetModuleTest={onSetModuleTest} materialActive={materialActive}
        setMaterialActive={setMaterialActive}
      />
    }
  }

  const technicView = renderTechnic();

  return (
    <div className="parameters-Module">
      <div className="parameters-Module__header">
        <span className="parameters-Module__name">Параметры</span>
        <span
          onClick={() => dispatch(setCurrentModuleSelected(false))} 
          className="parameters-Module__exit">
          <img src={closeSvg} alt="Закрыть" />
        </span>
      </div>
      <div className="parameters-Module__body parameters-Module-body">
        <div className="parameters-Module-body__block">
          <span className="parameters-Module-body__name bold">Размеры</span>
          <div className="parameters-Module-body__row row-6">
            <div className="parameters-Module-body__half">
              <span className="parameters-Module-body__half-name">Ширина</span>
              <input
                value={widthItem}
                onChange={(e) => onSetWidthChange(e.target.value)} 
                onKeyDown={(e) => onSetWidth(e.code)}
                onBlur={() => onSetWidth('Enter')}
                type="number" 
                className="parameters-Module-body__half-input" />
            </div>
            <div className="parameters-Module-body__half">
              <span className="parameters-Module-body__half-name">Высота</span>
              <input 
                value={heightItem}
                onChange={(e) => onSetHeightChange(e.target.value)}
                type="number"
                className="parameters-Module-body__half-input" />
            </div>
          </div>
          <div className="parameters-Module-body__row row-10">
            <div className="parameters-Module-body__half">
              <span className="parameters-Module-body__half-name">Глубина</span>
              <input 
                value={depthItem}
                onChange={(e) => onSetDepthChange(e.target.value)}
                type="number" 
                className="parameters-Module-body__half-input" />
            </div>
            <div className="parameters-Module-body__half">
              <span className="parameters-Module-body__half-name">Передняя граница</span>
              <input 
                value={0}
                type="number" 
                className="parameters-Module-body__half-input" />
            </div>
          </div>
          <span className="parameters-Module-body__name m-16">Опора кухонная</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(4)} 
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">100 мм (черная)</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===4?'active':''}`}>
              <li
                onClick={() => onSetMaterialActive(0)}
                className="parameters-Module-body__select-item">100 мм (черная)</li>
            </ul>
          </div>
          <div className="parameters-Module-body__checkbox">
            <div 
              onClick={() => setC(c => !c)}
              className={`parameters-Module-body__checkbox-box ${c?'active':''}`}>
              <img src={onSvg} alt="Да" />
            </div>
            <div className="parameters-Module-body__checkbox-name">Цоколь ЛДСП</div>
          </div> 
          <span className="parameters-Module-body__name m-16">Стяжки</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(5)} 
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">80 мм</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===5?'active':''}`}>
              <li
                onClick={() => onSetMaterialActive(0)} 
                className="parameters-Module-body__select-item">80 мм</li>
            </ul>
          </div>
          <span className="parameters-Module-body__name m-16">Материал корпуса</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(1)} 
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">{material?material:'Выберите материал...'}</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===1?'active':''}`}>
              <li
                onClick={(e) => onSetMaterial('Eichesil')} 
                className="parameters-Module-body__select-item">Eichesil</li>
              <li 
                onClick={(e) => onSetMaterial('Cherry')} 
                className="parameters-Module-body__select-item">Cherry</li>
            </ul>
          </div>
          <span className="parameters-Module-body__name m-16">Материал задней стенки</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(2)}  
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">{backWall?backWall:'Выберите материал...'}</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===2?'active':''}`}>
            <li
                onClick={(e) => onSetBackWall('Eichesil')} 
                className="parameters-Module-body__select-item">Eichesil</li>
              <li 
                onClick={(e) => onSetBackWall('Cherry')} 
                className="parameters-Module-body__select-item">Cherry</li>
            </ul>
          </div>
          <span className="parameters-Module-body__name m-16">Кромка корпуса</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(6)}  
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">{edge?`${edge} мм`:'Выберите размер...'}</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===6?'active':''}`}>
              <li
                onClick={() => onSetEdge(0.4)} 
                className="parameters-Module-body__select-item">0.4 мм</li>
              <li 
                onClick={() => onSetEdge(1)} 
                className="parameters-Module-body__select-item">1 мм</li>
              <li 
                onClick={() => onSetEdge(2)} 
                className="parameters-Module-body__select-item">2 мм</li>
            </ul>
          </div>
        </div>
        {technicView}
        <div className="parameters-Module-body__block">
          <span className="parameters-Module-body__name m-16">Тип фасада</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(7)}  
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">МДФ в пленке</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===7?'active':''}`}>
              <li
                onClick={() => onSetMaterialActive(0)} 
                className="parameters-Module-body__select-item">МДФ в пленке</li>
            </ul>
          </div>
          <span className="parameters-Module-body__name m-16">Материал фасада МДФ</span>
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(8)}  
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">{front?front:'Выберите материал...'}</div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===8?'active':''}`}>
              <li
                onClick={() => onSetFront('Eichesil')} 
                className="parameters-Module-body__select-item">Eichesil</li>
              <li 
                onClick={() => onSetFront('Cherry')} 
                className="parameters-Module-body__select-item">Cherry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="parameters-Module__footer"></div>
    </div>
  );
}

// const ParametersModuleShelves = ({shelves, removableShelves, onSetShelves, onSetRemovableShelves}) => {
//   return (
//     <>
//     {/* <div className="parameters-Module-body__block"> */}
//       <div className="parameters-Module-body__row m-16">
//         <div className="parameters-Module-body__name">Количество полок</div>
//         <div
//           style={{margin: '8px 0 0'}} 
//           className="parameters-Module-body__num">
//           <input 
//             value={shelves}
//             onChange={(e) => onSetShelves(e.target.value)}
//             min="0"
//             max="5"
//             type="number"
//             className="parameters-Module-body__num-input" />
//           <span className="parameters-Module-body__num-text">шт.</span>
//         </div>
//       </div>
//       <div className="parameters-Module-body__checkbox">
//         <div 
//           onClick={() => onSetRemovableShelves()}
//           className={`parameters-Module-body__checkbox-box ${removableShelves?'active':''}`}>
//           <img src={onSvg} alt="Да" />
//         </div>
//         <div className="parameters-Module-body__checkbox-name">Съемная полка</div>
//       </div>
//     {/* </div> */}
//     </>
//   )
// }

export default ParametersModule;